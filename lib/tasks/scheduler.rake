task :clpull => :environment do
  require 'watir-webdriver'
  require 'nokogiri'
  numsregex = /\d+/
  numregex = /\d/
  browser = Watir::Browser.new :phantomjs
  browser.goto 'http://sfbay.craigslist.org/search/apa?hasPic=1&min_price=1&bedrooms=1'
  listings = Nokogiri::HTML.parse(browser.html)
  numlistings = listings.css("span[class=rows]").children.length
  i = 1
  (numlistings - 2).times do
    urlpartial = listings.css("span[class=rows]").children[i].children[3].children[3].children[3].attributes["href"].value
    url = 'http://sfbay.craigslist.org' + urlpartial
    browser.goto url
    listing = Nokogiri::HTML.parse(browser.html)
    housingresult = listing.css("span[class=housing]").children[0].content
    housingresult = numregex.match(housingresult)[0]
    priceresult = listing.css("span[class=price]").children[0].content
    priceresult = numsregex.match(priceresult)[0]
    titleresult = listing.css("span[id=titletextonly]").children[0].content
    description = listing.css("section[id=postingbody]").inner_html
    numimages = listing.css('div[class=tray]').children.length
    images = []
    @listing = Listing.new(title: titleresult, bedroom: housingresult, price: priceresult, url: url, description: description)
    @listing.save!
    j=0
    (numimages - 1).times do
      img_url = listing.css('div[id=thumbs]').children[j].attributes['href'].value
      @listingimage = Listingimage.new(url: img_url, listing_id: @listing.id)
      @listingimage.save!
      images.push(listing.css('div[id=thumbs]').children[j].attributes['href'].value)
    end
    i+=1
  end
  browser.close
end
