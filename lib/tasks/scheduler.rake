task :clpull => :environment do
  require 'watir-webdriver'
  require 'nokogiri'
  numsregex = /\d+/
    numregex = /\d/
    newlineregex = /\r?\n|\r/
    browser = Watir::Browser.new :firefox
    browser.goto 'http://sfbay.craigslist.org/search/apa?hasPic=1&search_distance=10&postal=94105&min_price=1&bedrooms=2'
    listings = Nokogiri::HTML.parse(browser.html)
    p listings.css("div[class=content]").length
    numlistings = listings.css("div[class=content]").children.length
    i = 3
    (numlistings - 4).times do
      urlpartial = listings.css("div[class=content]").children[i].children[3].children[3].children[3].attributes["href"].value
      url = 'http://sfbay.craigslist.org' + urlpartial
      browser.goto url
      listing = Nokogiri::HTML.parse(browser.html)
      latresult = listing.css("div[id=map]")[0].attributes["data-latitude"].value || 37.6
      lngresult = listing.css("div[id=map]")[0].attributes["data-longitude"].value || -122.45
      housingresult = listing.css("span[class=housing]").children[0].content
      housingresult = numregex.match(housingresult)[0]
      priceresult = listing.css("span[class=price]").children[0].content
      priceresult = numsregex.match(priceresult)[0]
      titleresult = listing.css("span[id=titletextonly]").children[0].content
      description = listing.css("section[id=postingbody]").inner_html
      description.delete!("\n")
      numimages = listing.css('div[class=tray]').children.length
      images = []
      @listing = Listing.new(title: titleresult, bedroom: housingresult, price: priceresult, url: url, description: description, lat: latresult, lng: lngresult)
      @listing.save
      j=0
      (numimages - 1).times do
        img_url = listing.css('div[id=thumbs]').children[j].attributes['href'].value
        @listingimage = Listingimage.new(url: img_url, listing_id: @listing.id)
        @listingimage.save
        images.push(listing.css('div[id=thumbs]').children[j].attributes['href'].value)
        j+=1
      end
      i+=1
    end
    browser.close
end
