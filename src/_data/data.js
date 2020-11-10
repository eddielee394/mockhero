export const data = {
  category: {
    isPending: false,
    data: {
      slug: null,
      results: [],
    },
    error: null,
  },
  checkout: {
    paymentRequired: true,
    paymentRequiredNoCharge: false,
    purchaseForCustomer: false,
    purchaseForCustomerReferralSource: "",
    purchaseForCustomerDescription: "Unspecified",
    purchaseOnBehalfOfCustomer: false,
    rebookReservationId: null,
    isRebookingReservation: false,
    rateSessionId: null,
    vehicleSelectPresent: false,
    vehicleSelectRequired: false,
    vehicleProfileId: null,
    vehicleColor: null,
    supportsOversizeFeeType: false,
    isVehicleUnknown: false,
    saveVehicleAsDefault: false,
    selectedLicensePlate: null,
    licensePlateState: null,
    newLicensePlate: true,
    selectedCreditCard: "new",
    isNewCreditCard: true,
    incomingPromoCode: null,
    promoCode: null,
    adminUser: {},
    currencyType: "USD",
    currencySymbol: "$",
    affiliate: null,
    licensePlateRequired: false,
    phoneNumberRequired: false,
    contractFullName: null,
    smsParkingPass: false,
    referralSource: "",
    forceRedundantMonthly: false,
    previousRental: false,
    reservationDetailsSkipped: false,
    reservationDetailsEdit: false,
    rid: null,
    isFetchingRates: false,
    highlightAccountPanel: false,
    isPurchasing: false,
    isStaleStart: false,
    showChangeDateTimeModal: false,
    changeDateTimeModalTitle: null,
    changeDateTimeModalIntroMessage: null,
    showWhyTimeExtendedModal: false,
    showRecommendedSpotsModal: false,
    showRedundantMonthlyReservationModal: false,
    redundantMonthlyReservationModalDate: null,
    redundantMonthlyReservationModalParkingPassURL: null,
    recommendedSpotsUnavailableReason: "Rate unavailable.",
    checkoutError: null,
    checkoutStartTime: "2020-10-30T17:02:22.317Z",
    changedDateTimeCount: 0,
    isPurchasingWithPaymentRequest: false,
    spot: {
      parking_spot_id: 6497,
      title: "810 N Austin Blvd. - Lot",
      distance: 1174,
      latitude: 41.8950683036,
      longitude: -87.7762959143,
      lowest_price: 750,
      highest_price: 750,
      lowest_monthly_price: 0,
      highest_monthly_price: 0,
      default_image_url:
        "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
      hourly_rates: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 147451,
        price: 750,
        display_price: 700,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 11913,
        event_id: null,
        rule_trail: "147451",
        starts: "2020-10-30T12:00",
        ends: "2020-10-30T15:00",
        url:
          "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
        duration: 3,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 700,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 750,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "In & Out Allowed",
            slug: "in-out",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
            sort_order: 1,
          },
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 4,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 11913,
      },
      monthly_rates: [],
      bulk_event_rates: [],
      license_plate_required: true,
      phone_number_required: true,
      timezone: "America/Chicago",
      spot_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
      wd_latitude: 41.8950683036,
      wd_longitude: -87.7762959143,
      commuter_card_eligible: false,
      publish_to_mobile: true,
      currency_type: "usd",
      currency_symbol: "$",
      rating_info: {
        number_of_ratings: 25,
        star_rating: 4.76,
      },
      available_transient_inventory: 9,
      facility: {
        id: 6497,
        parking_spot_id: 6497,
        title: "810 N Austin Blvd. - Lot",
        description:
          '<p><strong>Please Note:</strong></p><p>If you need to change or update your license plate number after purchasing, you can do so under "My Reservations" in your account.</p>',
        status: "on_sales_allowed",
        slug: "818-n-austin-blvd",
        street_address: "810 North Austin Boulevard",
        city: "Oak Park",
        state: "IL",
        zipcode: "60302",
        latitude: 41.8950683036,
        longitude: -87.7762959143,
        company_id: 1463,
        timezone: "America/Chicago",
        display_price_on_receipt: true,
        height_restriction: null,
        height_restriction_description: null,
        barcode_type: "qrcode",
        post_purchase_instructions: "",
        restrictions: [],
        hours_of_operation: {
          text: ["This facility is open 24/7."],
          periods: [],
        },
        getting_here:
          "Enter this location at 810 N Austin Blvd. It is located on the west side of N Austin Blvd. between W Rice St. and W Chicago Ave. The lot is bordered by a short black fence.",
        addresses: [
          {
            id: 7129,
            latitude: 41.8950683036,
            longitude: -87.7762959143,
            street_address: "810 North Austin Boulevard",
            city: "Oak Park",
            state: "IL",
            zipcode: "60302",
            types: [
              "physical",
              "search",
              "walking-distance",
              "default-vehicle-entrance",
            ],
          },
        ],
        redemption_instructions: [
          {
            illustration_id: "pp3uajdxl5u9lrnak1as",
            illustration_version: "1408636881",
            text:
              "Make sure your license plate matches the plate on your Parking Pass. Failure to do so will result in a ticket or tow.",
            id: 12682,
            position: 1,
          },
          {
            illustration_id: "b2omz3upgcpjn44cyhjb",
            illustration_version: "1408636122",
            text: 'You may park anywhere that doesn\'t say "Reserved".',
            id: 12684,
            position: 2,
          },
          {
            illustration_id: "hodnezajkpxuiisu0i4e",
            illustration_version: "1408636065",
            text: "Simply leave when you're ready to go!",
            id: 12687,
            position: 3,
          },
        ],
        mobile_enabled: true,
        parking_pass_type: "self_park_see_attendant",
        support_description:
          "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
        facility_type: {
          slug: "lot",
          display_name: "Lot",
        },
        cancellation_allowed: "customer",
        amenities_full: [
          {
            slug: "self-park",
            name: "Self Park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          },
          {
            slug: "paved",
            name: "Lot - Uncovered",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          },
          {
            slug: "in-out",
            name: "In & Out Allowed",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
          },
          {
            slug: "wheelchair",
            name: "Wheelchair Accessible",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          },
        ],
        images: [
          {
            id: "nzeenmpb2jm7f8uxxqc2",
            version: "1493131676",
            center_x: 375,
            center_y: 239,
            order: 0,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
          },
          {
            id: "dzayuuud0zrcrqfcuicl",
            version: "1493131728",
            center_x: 375,
            center_y: 217,
            order: 1,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_217/v1493131728/dzayuuud0zrcrqfcuicl.png",
          },
          {
            id: "j3x87ejbbqy4r1y6bcsf",
            version: "1493131702",
            center_x: 375,
            center_y: 286,
            order: 2,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_286/v1493131702/j3x87ejbbqy4r1y6bcsf.png",
          },
        ],
        facility_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
        rating_info: {
          number_of_ratings: 25,
          star_rating: 4.76,
        },
        vehicle_size: "not_applicable",
        oversize_vehicle_type: null,
        oversize_description: null,
        transient_available: true,
        monthly_available: true,
        vehicle_restriction_description: null,
        supported_fee_types: [],
        operator_id: 1846013,
        online_commuter_rate: false,
        online_commuter_rate_description: "",
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
      },
      spotId: 6497,
      activeMarker: true,
      isFavorite: false,
      hasTravelDistanceUpdated: true,
      hidden: false,
      selectedRate: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 147451,
        price: 750,
        display_price: 700,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 11913,
        event_id: null,
        rule_trail: "147451",
        starts: "2020-10-30T12:00",
        ends: "2020-10-30T15:00",
        url:
          "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
        duration: 3,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 700,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 750,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "In & Out Allowed",
            slug: "in-out",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
            sort_order: 1,
          },
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 4,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 11913,
      },
      url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
      hasOversizedFee: false,
      oversizedFeeMessage: null,
      vehicleRestriction: null,
      distanceInMiles: 0.35965909090909093,
      walkingDuration: 440,
    },
  },
  city: {
    isPending: false,
    data: {
      city: "Chicago",
      default_image: {
        id: "eva36idhwkolupgvuubf",
        version: "1412896337",
        center_x: 1250,
        center_y: 726,
        order: 0,
        url_template:
          "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_1250,y_726/v1412896337/eva36idhwkolupgvuubf.jpg",
      },
      default_map_zoom_level: 15,
      description:
        '<p><strong>Find Parking in Chicago</strong><br />Book with SpotHero and be on your way to convenient and affordable Chicago parking like you\'ve never experienced before.</p>\r\n<p>Don\'t waste time driving around when you can locate Chicago parking options in advance, and ensure a spot is reserved before you even arrive at your destination. Park smarter with SpotHero.</p>\r\n<p>Review the spots and Chicago parking map to book your preferred spot through your computer or phone, or <a href="../../../get-spothero-app/" target="_blank" rel="noopener noreferrer">download the free SpotHero app</a> to easily reserve parking on the go at any time.</p>\r\n<p><a href="../../../chicago-monthly-parking" target="_blank" rel="noopener noreferrer">Chicago Monthly Parking</a>&nbsp;|&nbsp;<a href="../../../parking-near-me" target="_self">Parking Near Me</a></p>\r\n<p><strong>Where to Park in Chicago</strong><br /><a href="../../../chicago/downtown-parking" target="_blank" rel="noopener noreferrer">Loop/Downtown</a><br /><a href="../../../chicago/lakeview-parking" target="_blank" rel="noopener noreferrer">Lakeview</a><br /><a href="../../../chicago/river-north-parking" target="_blank" rel="noopener noreferrer">River North</a></p>\r\n<p><strong>Popular Chicago Destinations</strong><br /><a href="../../../chicago/navy-pier-parking" target="_blank" rel="noopener noreferrer">Navy Pier</a><br /><a href="../../../chicago/shedd-aquarium-parking" target="_blank" rel="noopener noreferrer">Shedd Aquarium</a><br /><a href="../../../chicago/sears-tower-willis-tower-parking" target="_blank" rel="noopener noreferrer">Willis Tower</a><br /><a href="../../../chicago/lincoln-park-zoo-parking" target="_blank" rel="noopener noreferrer">Lincoln Park Zoo</a><br /><a href="../../../chicago/millennium-park-parking" target="_blank" rel="noopener noreferrer">Millennium Park</a><br /><a href="../../../chicago/amc-river-east-21-parking" target="_blank" rel="noopener noreferrer">AMC River East</a><br /><a href="../../../chicago/john-hancock-center-parking" target="_blank" rel="noopener noreferrer">John Hancock Center</a><br /><a href="../../../chicago/water-tower-place-parking" target="_blank" rel="noopener noreferrer">Water Tower Place</a><br /> <a href="../../../chicago/mccormick-place-parking" target="_blank" rel="noopener noreferrer">McCormick Place</a></p>\r\n<p><strong>Major Stadiums</strong><br /><a href="../../../chicago/wrigley-field-parking" target="_blank" rel="noopener noreferrer">Wrigley Field</a>&nbsp;(Home of the Cubs)<br /><a href="../../../chicago/united-center-parking" target="_blank" rel="noopener noreferrer">United Center</a>&nbsp;(Home of the Blackhawks and Bulls)<br /><a href="../../../chicago/guaranteed-rate-field-parking" target="_blank" rel="noopener noreferrer">Guaranteed Rate Field</a>&nbsp;(Home of the White Sox)<br /><a href="../../../chicago/soldier-field-parking" target="_blank" rel="noopener noreferrer">Soldier Field</a>&nbsp;(Home of the Bears)</p>\r\n<p><strong>Chicago Airport Parking</strong><br /> <a href="../../../chicago/ohare-airport-parking" target="_blank" rel="noopener noreferrer">O&rsquo;Hare International Airport (ORD)</a><br /> <a href="../../../chicago/midway-airport-parking" target="_blank" rel="noopener noreferrer">Chicago Midway International Airport (MDW)</a></p>',
      display_name: "Chicago",
      id: 1,
      latitude: 41.8839288418,
      longitude: -87.6309569143,
      monthly_description:
        "<p>Find Chicago monthly parking options through SpotHero.</p>\r\n<p>To view monthly parking in Chicago currently available for purchase, input your desired start date and the options will update accordingly.</p>\r\n<p>You can click your selected pin directly on the map, or simply press the spot's corresponding &ldquo;Book It&rdquo; button to review more details about the Chicago monthly parking location prior to proceeding to checkout.</p>",
      monthly_meta_description:
        "Find and compare great monthly Chicago parking spots in the Loop, River North, Lakeview, and more. Book with Chicago's #1 site for monthly parking. Save with SpotHero.",
      monthly_meta_title: "Chicago Monthly Parking - Reserve & Save | SpotHero",
      monthly_short_description: "",
      monthly_phone_number: "+18442925251",
      monthly_phone_number_friendly: "+844-292-5251",
      monthly_relative_url: "chicago-monthly-parking",
      phone_number: "+18443247768",
      phone_number_friendly: "844-324-SPOT (7768)",
      relative_url: "chicago-parking",
      slug: "chicago",
      short_description: "Save on parking in Chicago",
      state: "IL",
      street_address: "",
      support_email: "support@spothero.com",
      timezone: "America/Chicago",
      transient_meta_description:
        "Reserve Chicago parking through SpotHero. Book parking near Wrigley Field, Navy Pier, the Loop, Lincoln Park Zoo, Shedd Aquarium, and more. Book your spot now!",
      transient_meta_title:
        "Chicago Parking » Rates from $6 [Reserve Now] » SpotHero",
      weekday_hours: "Daily, 6am – 11pm CST",
      weekend_hours: "",
      zoom_level: 15,
      mobile_zoom_level: 15,
      monthly_zoom_level: 15,
      monthly_mobile_zoom_level: 14,
      search_bounds: {
        sw_lat: 41.699576,
        sw_lng: -87.962036,
        ne_lat: 41.988077,
        ne_lng: -87.481384,
      },
    },
    error: null,
  },
  destination: {
    isPending: false,
    data: {},
    airportStructuredData: [],
    airportLowestDailyRate: 0,
    error: null,
  },
  event: {
    isPending: false,
    data: {},
    error: null,
  },
  filters: {
    numActive: 0,
    amenities: {},
    activeAmenities: [],
    reservationTypes: {
      247: {
        slug: "247",
        name: "24/7 Regular Parking",
        description: "Unlimited parking 7 days a week, 24 hours a day.",
        count: 0,
        related: [],
        active: false,
      },
      all: {
        slug: "all",
        name: "All Parking Options",
      },
      daytime_only: {
        slug: "daytime_only",
        name: "Daytime Only Parking",
        description:
          "Great option if you drive to work but don’t need to park overnight.",
        count: 0,
        related: ["daytime_and_247_weekend", "247"],
        active: false,
      },
      daytime_and_247_weekend: {
        slug: "daytime_and_247_weekend",
        name: "Daytime + 24/7 Weekend Parking",
        description:
          "Great option if you drive to work during the week and need unlimited parking during the weekend.",
        count: 0,
        related: ["247"],
        active: false,
      },
      nights_only: {
        slug: "nights_only",
        name: "Nights Only Parking",
        description:
          "Great  option if you need to park overnight, but use your car during the day.",
        count: 0,
        related: ["nights_and_247_weekend", "247"],
        active: false,
      },
      nights_and_247_weekend: {
        slug: "nights_and_247_weekend",
        name: "Nights + 24/7 Weekend Parking",
        description:
          "Great option if you need to park overnight and throughout the weekend.",
        count: 0,
        related: ["247"],
        active: false,
      },
      storage: {
        slug: "storage",
        name: "Storage",
        description:
          "Safe and secure storage if you want to drop off your car for an extended period of time",
        count: 0,
        related: [],
        active: false,
      },
      valet: {
        slug: "valet",
        name: "On-Demand Valet",
        description:
          "Book through SpotHero and and a third party valet will pick up/drop off your car at your desired location. Restrictions apply.",
        count: 0,
        related: [],
        active: false,
      },
    },
    activeReservationType: "all",
    viaQuickFilter: false,
  },
  notification: null,
};

export const searchData = {
  isPending: false,
  data: {
    searchType: "address",
    showNoSpotsFound: false,
    currentIncrement: 0,
    zoom: 14,
    isDefaultTimes: true,
    overrideIdealZoom: false,
    destinationTitle: "Oak Park, IL, USA",
    sortBy: "distance",
    isInfoPanelVisible: false,
    breadcrumbs: {
      extraBreadcrumb: {
        url: null,
        label: null,
      },
      activeBreadcrumb: {
        url: null,
        label: "Oak Park, IL, USA",
      },
      city: {
        relativeUrl: "/city/chicago-parking",
        displayName: "Chicago",
      },
      destination: {},
      event: {},
    },
    searchMapInstance: {},
  },
};

export const spotData = {
  selected: {
    parking_spot_id: 6497,
    title: "810 N Austin Blvd. - Lot",
    distance: 0,
    latitude: 41.8950683036,
    longitude: -87.7762959143,
    lowest_price: 0,
    highest_price: 0,
    lowest_monthly_price: 0,
    highest_monthly_price: 0,
    default_image_url:
      "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
    hourly_rates: {
      rule_type: "multirate",
      title: "Default",
      rule_id: 147451,
      price: 750,
      display_price: 700,
      unavailable: false,
      unavailable_reason: "",
      rule_group_id: 11913,
      event_id: null,
      rule_trail: "147451",
      starts: "2020-10-31T12:00",
      ends: "2020-10-31T15:00",
      url:
        "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
      duration: 3,
      currency_type: "usd",
      currency_symbol: "$",
      price_breakdown: {
        items: [
          {
            price: 700,
            type: "rental",
            short_description: "Subtotal",
            full_description: "",
          },
          {
            price: 50,
            type: "blanket_fee",
            short_description: "Service Fee",
            full_description:
              "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
          },
        ],
        currency: "usd",
        total_price: 750,
      },
      online_commuter_rate: false,
      online_commuter_rate_description: null,
      online_commuter_rate_enter_start: null,
      online_commuter_rate_enter_end: null,
      amenities: [
        {
          name: "In & Out Allowed",
          slug: "in-out",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
          sort_order: 1,
        },
        {
          name: "Self Park",
          slug: "self-park",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          sort_order: 2,
        },
        {
          name: "Wheelchair Accessible",
          slug: "wheelchair",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          sort_order: 3,
        },
        {
          name: "Lot - Uncovered",
          slug: "paved",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          sort_order: 4,
        },
      ],
      parking_type: "self",
      hidden: false,
      newMonthlyRate: false,
      fullUrl:
        "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
      access_hours_formatted: [
        {
          type: "247",
        },
      ],
      fullRule: 11913,
    },
    monthly_rates: [],
    bulk_event_rates: [],
    license_plate_required: true,
    phone_number_required: true,
    timezone: "America/Chicago",
    spot_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
    wd_latitude: 41.8950683036,
    wd_longitude: -87.7762959143,
    commuter_card_eligible: false,
    publish_to_mobile: true,
    currency_type: "usd",
    currency_symbol: "$",
    rating_info: {
      number_of_ratings: 25,
      star_rating: 4.76,
    },
    available_transient_inventory: 9,
    facility: {
      id: 6497,
      parking_spot_id: 6497,
      title: "810 N Austin Blvd. - Lot",
      description:
        '<p><strong>Please Note:</strong></p><p>If you need to change or update your license plate number after purchasing, you can do so under "My Reservations" in your account.</p>',
      status: "on_sales_allowed",
      slug: "818-n-austin-blvd",
      street_address: "810 North Austin Boulevard",
      city: "Oak Park",
      state: "IL",
      zipcode: "60302",
      latitude: 41.8950683036,
      longitude: -87.7762959143,
      company_id: 1463,
      timezone: "America/Chicago",
      display_price_on_receipt: true,
      height_restriction: null,
      height_restriction_description: null,
      barcode_type: "qrcode",
      post_purchase_instructions: "",
      restrictions: [],
      hours_of_operation: {
        text: ["This facility is open 24/7."],
        periods: [],
      },
      getting_here:
        "Enter this location at 810 N Austin Blvd. It is located on the west side of N Austin Blvd. between W Rice St. and W Chicago Ave. The lot is bordered by a short black fence.",
      addresses: [
        {
          id: 7129,
          latitude: 41.8950683036,
          longitude: -87.7762959143,
          street_address: "810 North Austin Boulevard",
          city: "Oak Park",
          state: "IL",
          zipcode: "60302",
          types: [
            "physical",
            "search",
            "walking-distance",
            "default-vehicle-entrance",
          ],
        },
      ],
      redemption_instructions: [
        {
          illustration_id: "pp3uajdxl5u9lrnak1as",
          illustration_version: "1408636881",
          text:
            "Make sure your license plate matches the plate on your Parking Pass. Failure to do so will result in a ticket or tow.",
          id: 12682,
          position: 1,
        },
        {
          illustration_id: "b2omz3upgcpjn44cyhjb",
          illustration_version: "1408636122",
          text: 'You may park anywhere that doesn\'t say "Reserved".',
          id: 12684,
          position: 2,
        },
        {
          illustration_id: "hodnezajkpxuiisu0i4e",
          illustration_version: "1408636065",
          text: "Simply leave when you're ready to go!",
          id: 12687,
          position: 3,
        },
      ],
      mobile_enabled: true,
      parking_pass_type: "self_park_see_attendant",
      support_description:
        "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
      facility_type: {
        slug: "lot",
        display_name: "Lot",
      },
      cancellation_allowed: "customer",
      amenities_full: [
        {
          slug: "self-park",
          name: "Self Park",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
        },
        {
          slug: "paved",
          name: "Lot - Uncovered",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
        },
        {
          slug: "in-out",
          name: "In & Out Allowed",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
        },
        {
          slug: "wheelchair",
          name: "Wheelchair Accessible",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
        },
      ],
      images: [
        {
          id: "nzeenmpb2jm7f8uxxqc2",
          version: "1493131676",
          center_x: 375,
          center_y: 239,
          order: 0,
          url_template:
            "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
        },
        {
          id: "dzayuuud0zrcrqfcuicl",
          version: "1493131728",
          center_x: 375,
          center_y: 217,
          order: 1,
          url_template:
            "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_217/v1493131728/dzayuuud0zrcrqfcuicl.png",
        },
        {
          id: "j3x87ejbbqy4r1y6bcsf",
          version: "1493131702",
          center_x: 375,
          center_y: 286,
          order: 2,
          url_template:
            "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_286/v1493131702/j3x87ejbbqy4r1y6bcsf.png",
        },
      ],
      facility_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
      rating_info: {
        number_of_ratings: 25,
        star_rating: 4.76,
      },
      vehicle_size: "not_applicable",
      oversize_vehicle_type: null,
      oversize_description: null,
      transient_available: true,
      monthly_available: true,
      vehicle_restriction_description: null,
      supported_fee_types: [],
      operator_id: 1846013,
      online_commuter_rate: false,
      online_commuter_rate_description: "",
      online_commuter_rate_enter_start: null,
      online_commuter_rate_enter_end: null,
      access_hours_formatted: [
        {
          type: "247",
        },
      ],
    },
    spotId: 6497,
    activeMarker: false,
    isFavorite: false,
    hasTravelDistanceUpdated: true,
    hidden: false,
    selectedRate: {
      rule_type: "multirate",
      title: "Default",
      rule_id: 147451,
      price: 750,
      display_price: 700,
      unavailable: false,
      unavailable_reason: "",
      rule_group_id: 11913,
      event_id: null,
      rule_trail: "147451",
      starts: "2020-10-30T12:00",
      ends: "2020-10-30T15:00",
      url:
        "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
      duration: 3,
      currency_type: "usd",
      currency_symbol: "$",
      price_breakdown: {
        items: [
          {
            price: 700,
            type: "rental",
            short_description: "Subtotal",
            full_description: "",
          },
          {
            price: 50,
            type: "blanket_fee",
            short_description: "Service Fee",
            full_description:
              "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
          },
        ],
        currency: "usd",
        total_price: 750,
      },
      online_commuter_rate: false,
      online_commuter_rate_description: null,
      online_commuter_rate_enter_start: null,
      online_commuter_rate_enter_end: null,
      amenities: [
        {
          name: "In & Out Allowed",
          slug: "in-out",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
          sort_order: 1,
        },
        {
          name: "Self Park",
          slug: "self-park",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          sort_order: 2,
        },
        {
          name: "Wheelchair Accessible",
          slug: "wheelchair",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          sort_order: 3,
        },
        {
          name: "Lot - Uncovered",
          slug: "paved",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          sort_order: 4,
        },
      ],
      parking_type: "self",
      hidden: false,
      newMonthlyRate: false,
      fullUrl:
        "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
      access_hours_formatted: [
        {
          type: "247",
        },
      ],
      fullRule: 11913,
    },
    url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
    hasOversizedFee: false,
    oversizedFeeMessage: null,
    vehicleRestriction: null,
    distanceInMiles: 0.35965909090909093,
    walkingDuration: 440,
  },
  previousSelected: {
    parking_spot_id: 6497,
    title: "810 N Austin Blvd. - Lot",
    distance: 0,
    latitude: 41.8950683036,
    longitude: -87.7762959143,
    lowest_price: 0,
    highest_price: 0,
    lowest_monthly_price: 0,
    highest_monthly_price: 0,
    default_image_url:
      "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
    hourly_rates: {
      rule_type: "multirate",
      title: "Default",
      rule_id: 147451,
      price: 750,
      display_price: 700,
      unavailable: false,
      unavailable_reason: "",
      rule_group_id: 11913,
      event_id: null,
      rule_trail: "147451",
      starts: "2020-10-30T12:00",
      ends: "2020-10-30T15:00",
      url:
        "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
      duration: 3,
      currency_type: "usd",
      currency_symbol: "$",
      price_breakdown: {
        items: [
          {
            price: 700,
            type: "rental",
            short_description: "Subtotal",
            full_description: "",
          },
          {
            price: 50,
            type: "blanket_fee",
            short_description: "Service Fee",
            full_description:
              "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
          },
        ],
        currency: "usd",
        total_price: 750,
      },
      online_commuter_rate: false,
      online_commuter_rate_description: null,
      online_commuter_rate_enter_start: null,
      online_commuter_rate_enter_end: null,
      amenities: [
        {
          name: "In & Out Allowed",
          slug: "in-out",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
          sort_order: 1,
        },
        {
          name: "Self Park",
          slug: "self-park",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          sort_order: 2,
        },
        {
          name: "Wheelchair Accessible",
          slug: "wheelchair",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          sort_order: 3,
        },
        {
          name: "Lot - Uncovered",
          slug: "paved",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          sort_order: 4,
        },
      ],
      parking_type: "self",
      hidden: false,
      newMonthlyRate: false,
      fullUrl:
        "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
      access_hours_formatted: [
        {
          type: "247",
        },
      ],
      fullRule: 11913,
    },
    monthly_rates: [],
    bulk_event_rates: [],
    license_plate_required: true,
    phone_number_required: true,
    timezone: "America/Chicago",
    spot_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
    wd_latitude: 41.8950683036,
    wd_longitude: -87.7762959143,
    commuter_card_eligible: false,
    publish_to_mobile: true,
    currency_type: "usd",
    currency_symbol: "$",
    rating_info: {
      number_of_ratings: 25,
      star_rating: 4.76,
    },
    available_transient_inventory: 9,
    facility: {
      id: 6497,
      parking_spot_id: 6497,
      title: "810 N Austin Blvd. - Lot",
      description:
        '<p><strong>Please Note:</strong></p><p>If you need to change or update your license plate number after purchasing, you can do so under "My Reservations" in your account.</p>',
      status: "on_sales_allowed",
      slug: "818-n-austin-blvd",
      street_address: "810 North Austin Boulevard",
      city: "Oak Park",
      state: "IL",
      zipcode: "60302",
      latitude: 41.8950683036,
      longitude: -87.7762959143,
      company_id: 1463,
      timezone: "America/Chicago",
      display_price_on_receipt: true,
      height_restriction: null,
      height_restriction_description: null,
      barcode_type: "qrcode",
      post_purchase_instructions: "",
      restrictions: [],
      hours_of_operation: {
        text: ["This facility is open 24/7."],
        periods: [],
      },
      getting_here:
        "Enter this location at 810 N Austin Blvd. It is located on the west side of N Austin Blvd. between W Rice St. and W Chicago Ave. The lot is bordered by a short black fence.",
      addresses: [
        {
          id: 7129,
          latitude: 41.8950683036,
          longitude: -87.7762959143,
          street_address: "810 North Austin Boulevard",
          city: "Oak Park",
          state: "IL",
          zipcode: "60302",
          types: [
            "physical",
            "search",
            "walking-distance",
            "default-vehicle-entrance",
          ],
        },
      ],
      redemption_instructions: [
        {
          illustration_id: "pp3uajdxl5u9lrnak1as",
          illustration_version: "1408636881",
          text:
            "Make sure your license plate matches the plate on your Parking Pass. Failure to do so will result in a ticket or tow.",
          id: 12682,
          position: 1,
        },
        {
          illustration_id: "b2omz3upgcpjn44cyhjb",
          illustration_version: "1408636122",
          text: 'You may park anywhere that doesn\'t say "Reserved".',
          id: 12684,
          position: 2,
        },
        {
          illustration_id: "hodnezajkpxuiisu0i4e",
          illustration_version: "1408636065",
          text: "Simply leave when you're ready to go!",
          id: 12687,
          position: 3,
        },
      ],
      mobile_enabled: true,
      parking_pass_type: "self_park_see_attendant",
      support_description:
        "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
      facility_type: {
        slug: "lot",
        display_name: "Lot",
      },
      cancellation_allowed: "customer",
      amenities_full: [
        {
          slug: "self-park",
          name: "Self Park",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
        },
        {
          slug: "paved",
          name: "Lot - Uncovered",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
        },
        {
          slug: "in-out",
          name: "In & Out Allowed",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
        },
        {
          slug: "wheelchair",
          name: "Wheelchair Accessible",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
        },
      ],
      images: [
        {
          id: "nzeenmpb2jm7f8uxxqc2",
          version: "1493131676",
          center_x: 375,
          center_y: 239,
          order: 0,
          url_template:
            "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
        },
        {
          id: "dzayuuud0zrcrqfcuicl",
          version: "1493131728",
          center_x: 375,
          center_y: 217,
          order: 1,
          url_template:
            "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_217/v1493131728/dzayuuud0zrcrqfcuicl.png",
        },
        {
          id: "j3x87ejbbqy4r1y6bcsf",
          version: "1493131702",
          center_x: 375,
          center_y: 286,
          order: 2,
          url_template:
            "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_286/v1493131702/j3x87ejbbqy4r1y6bcsf.png",
        },
      ],
      facility_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
      rating_info: {
        number_of_ratings: 25,
        star_rating: 4.76,
      },
      vehicle_size: "not_applicable",
      oversize_vehicle_type: null,
      oversize_description: null,
      transient_available: true,
      monthly_available: true,
      vehicle_restriction_description: null,
      supported_fee_types: [],
      operator_id: 1846013,
      online_commuter_rate: false,
      online_commuter_rate_description: "",
      online_commuter_rate_enter_start: null,
      online_commuter_rate_enter_end: null,
      access_hours_formatted: [
        {
          type: "247",
        },
      ],
    },
    spotId: 6497,
    activeMarker: false,
    isFavorite: false,
    hasTravelDistanceUpdated: true,
    hidden: false,
    selectedRate: {
      rule_type: "multirate",
      title: "Default",
      rule_id: 147451,
      price: 750,
      display_price: 700,
      unavailable: false,
      unavailable_reason: "",
      rule_group_id: 11913,
      event_id: null,
      rule_trail: "147451",
      starts: "2020-10-30T12:00",
      ends: "2020-10-30T15:00",
      url:
        "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
      duration: 3,
      currency_type: "usd",
      currency_symbol: "$",
      price_breakdown: {
        items: [
          {
            price: 700,
            type: "rental",
            short_description: "Subtotal",
            full_description: "",
          },
          {
            price: 50,
            type: "blanket_fee",
            short_description: "Service Fee",
            full_description:
              "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
          },
        ],
        currency: "usd",
        total_price: 750,
      },
      online_commuter_rate: false,
      online_commuter_rate_description: null,
      online_commuter_rate_enter_start: null,
      online_commuter_rate_enter_end: null,
      amenities: [
        {
          name: "In & Out Allowed",
          slug: "in-out",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
          sort_order: 1,
        },
        {
          name: "Self Park",
          slug: "self-park",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          sort_order: 2,
        },
        {
          name: "Wheelchair Accessible",
          slug: "wheelchair",
          visible: true,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          sort_order: 3,
        },
        {
          name: "Lot - Uncovered",
          slug: "paved",
          visible: false,
          icon_url:
            "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          sort_order: 4,
        },
      ],
      parking_type: "self",
      hidden: false,
      newMonthlyRate: false,
      fullUrl:
        "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
      access_hours_formatted: [
        {
          type: "247",
        },
      ],
      fullRule: 11913,
    },
    url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
    hasOversizedFee: false,
    oversizedFeeMessage: null,
    vehicleRestriction: null,
    distanceInMiles: 0.35965909090909093,
    walkingDuration: 440,
  },
  showSpotDetailsModal: true,
  showRateDetailsModal: false,
  rateDetailsModalSection: null,
  showOversizedFeeDetailsModal: false,
  showOnlineCommuterRateModal: false,
};

export const spotsData = {
  isPending: false,
  airportPendingRequests: [],
  data: [
    {
      parking_spot_id: 6497,
      title: "810 N Austin Blvd. - Lot",
      distance: 1174,
      latitude: 41.8950683036,
      longitude: -87.7762959143,
      lowest_price: 750,
      highest_price: 750,
      lowest_monthly_price: 0,
      highest_monthly_price: 0,
      default_image_url:
        "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
      hourly_rates: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 147451,
        price: 750,
        display_price: 700,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 11913,
        event_id: null,
        rule_trail: "147451",
        starts: "2020-10-30T12:00",
        ends: "2020-10-30T15:00",
        url:
          "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
        duration: 3,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 700,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 750,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "In & Out Allowed",
            slug: "in-out",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
            sort_order: 1,
          },
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 4,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 11913,
      },
      monthly_rates: [],
      bulk_event_rates: [],
      license_plate_required: true,
      phone_number_required: true,
      timezone: "America/Chicago",
      spot_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
      wd_latitude: 41.8950683036,
      wd_longitude: -87.7762959143,
      commuter_card_eligible: false,
      publish_to_mobile: true,
      currency_type: "usd",
      currency_symbol: "$",
      rating_info: {
        number_of_ratings: 25,
        star_rating: 4.76,
      },
      available_transient_inventory: 9,
      facility: {
        id: 6497,
        parking_spot_id: 6497,
        title: "810 N Austin Blvd. - Lot",
        description:
          '<p><strong>Please Note:</strong></p><p>If you need to change or update your license plate number after purchasing, you can do so under "My Reservations" in your account.</p>',
        status: "on_sales_allowed",
        slug: "818-n-austin-blvd",
        street_address: "810 North Austin Boulevard",
        city: "Oak Park",
        state: "IL",
        zipcode: "60302",
        latitude: 41.8950683036,
        longitude: -87.7762959143,
        company_id: 1463,
        timezone: "America/Chicago",
        display_price_on_receipt: true,
        height_restriction: null,
        height_restriction_description: null,
        barcode_type: "qrcode",
        post_purchase_instructions: "",
        restrictions: [],
        hours_of_operation: {
          text: ["This facility is open 24/7."],
          periods: [],
        },
        getting_here:
          "Enter this location at 810 N Austin Blvd. It is located on the west side of N Austin Blvd. between W Rice St. and W Chicago Ave. The lot is bordered by a short black fence.",
        addresses: [
          {
            id: 7129,
            latitude: 41.8950683036,
            longitude: -87.7762959143,
            street_address: "810 North Austin Boulevard",
            city: "Oak Park",
            state: "IL",
            zipcode: "60302",
            types: [
              "physical",
              "search",
              "walking-distance",
              "default-vehicle-entrance",
            ],
          },
        ],
        redemption_instructions: [
          {
            illustration_id: "pp3uajdxl5u9lrnak1as",
            illustration_version: "1408636881",
            text:
              "Make sure your license plate matches the plate on your Parking Pass. Failure to do so will result in a ticket or tow.",
            id: 12682,
            position: 1,
          },
          {
            illustration_id: "b2omz3upgcpjn44cyhjb",
            illustration_version: "1408636122",
            text: 'You may park anywhere that doesn\'t say "Reserved".',
            id: 12684,
            position: 2,
          },
          {
            illustration_id: "hodnezajkpxuiisu0i4e",
            illustration_version: "1408636065",
            text: "Simply leave when you're ready to go!",
            id: 12687,
            position: 3,
          },
        ],
        mobile_enabled: true,
        parking_pass_type: "self_park_see_attendant",
        support_description:
          "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
        facility_type: {
          slug: "lot",
          display_name: "Lot",
        },
        cancellation_allowed: "customer",
        amenities_full: [
          {
            slug: "self-park",
            name: "Self Park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          },
          {
            slug: "paved",
            name: "Lot - Uncovered",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          },
          {
            slug: "in-out",
            name: "In & Out Allowed",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
          },
          {
            slug: "wheelchair",
            name: "Wheelchair Accessible",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          },
        ],
        images: [
          {
            id: "nzeenmpb2jm7f8uxxqc2",
            version: "1493131676",
            center_x: 375,
            center_y: 239,
            order: 0,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_239/v1493131676/nzeenmpb2jm7f8uxxqc2.png",
          },
          {
            id: "dzayuuud0zrcrqfcuicl",
            version: "1493131728",
            center_x: 375,
            center_y: 217,
            order: 1,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_217/v1493131728/dzayuuud0zrcrqfcuicl.png",
          },
          {
            id: "j3x87ejbbqy4r1y6bcsf",
            version: "1493131702",
            center_x: 375,
            center_y: 286,
            order: 2,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_286/v1493131702/j3x87ejbbqy4r1y6bcsf.png",
          },
        ],
        facility_url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
        rating_info: {
          number_of_ratings: 25,
          star_rating: 4.76,
        },
        vehicle_size: "not_applicable",
        oversize_vehicle_type: null,
        oversize_description: null,
        transient_available: true,
        monthly_available: true,
        vehicle_restriction_description: null,
        supported_fee_types: [],
        operator_id: 1846013,
        online_commuter_rate: false,
        online_commuter_rate_description: "",
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
      },
      spotId: 6497,
      activeMarker: true,
      isFavorite: false,
      hasTravelDistanceUpdated: true,
      hidden: false,
      selectedRate: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 147451,
        price: 750,
        display_price: 700,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 11913,
        event_id: null,
        rule_trail: "147451",
        starts: "2020-10-30T12:00",
        ends: "2020-10-30T15:00",
        url:
          "https://spothero.com/checkout/6497/818-n-austin-blvd?starts=2020-10-30T12%3A00&ends=2020-10-30T15%3A00",
        duration: 3,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 700,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 750,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "In & Out Allowed",
            slug: "in-out",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
            sort_order: 1,
          },
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 4,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/6497/818-n-austin-blvd?rid=11913&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 11913,
      },
      url: "https://spothero.com/checkout/6497/818-n-austin-blvd",
      hasOversizedFee: false,
      oversizedFeeMessage: null,
      vehicleRestriction: null,
      distanceInMiles: 0.35965909090909093,
      walkingDuration: 440,
    },
    {
      parking_spot_id: 7568,
      title: "1135 Westgate St. - The Emerson - Garage",
      distance: 1250,
      latitude: 41.887651,
      longitude: -87.803563,
      lowest_price: 850,
      highest_price: 850,
      lowest_monthly_price: 0,
      highest_monthly_price: 0,
      default_image_url:
        "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1415,y_943/v1575223914/zaafdujznnlb7qtogaxv.jpg",
      hourly_rates: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 125118,
        price: 850,
        display_price: 800,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 7566,
        event_id: null,
        rule_trail: "125118",
        starts: "2020-10-30T12:00",
        ends: "2020-10-31T00:00",
        url:
          "https://spothero.com/checkout/7568/1135-westgate-st?starts=2020-10-30T12%3A00&ends=2020-10-31T00%3A00",
        duration: 12,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 800,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 850,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 1,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Garage - Covered",
            slug: "covered-parking",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/covered-parking_pghvr4.svg",
            sort_order: 4,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 5,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/7568/1135-westgate-st?rid=7566&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 7566,
      },
      monthly_rates: [],
      bulk_event_rates: [],
      license_plate_required: true,
      phone_number_required: false,
      timezone: "America/Chicago",
      spot_url: "https://spothero.com/checkout/7568/1135-westgate-st",
      wd_latitude: 41.887651,
      wd_longitude: -87.803563,
      commuter_card_eligible: false,
      publish_to_mobile: true,
      currency_type: "usd",
      currency_symbol: "$",
      rating_info: {
        number_of_ratings: 2885,
        star_rating: 4.470363951473137,
      },
      available_transient_inventory: 72,
      facility: {
        id: 7568,
        parking_spot_id: 7568,
        title: "1135 Westgate St. - The Emerson - Garage",
        description:
          '<p><strong>Please Note:</strong></p><p>If you need to change or update your license plate number after purchasing, you can do so under "My Reservations" in your account.</p>',
        status: "on_sales_allowed",
        slug: "1135-westgate-st",
        street_address: "1135 Westgate Street",
        city: "Oak Park",
        state: "IL",
        zipcode: "60301",
        latitude: 41.887651,
        longitude: -87.803563,
        company_id: 7,
        timezone: "America/Chicago",
        display_price_on_receipt: true,
        height_restriction: null,
        height_restriction_description: null,
        barcode_type: "qrcode",
        post_purchase_instructions: "",
        restrictions: [
          "This facility does NOT allow in/out privileges. You CANNOT enter & exit more than once.",
        ],
        hours_of_operation: {
          text: ["This facility is open 24/7."],
          periods: [],
        },
        getting_here:
          "Enter this location at 1135 Westgate St. This is The Emerson garage, operated by LAZ Parking. It is located on the south side of Westgate St. between N Marion St. and Harlem Ave.",
        addresses: [
          {
            id: 8211,
            latitude: 41.887651,
            longitude: -87.803563,
            street_address: "1135 Westgate Street",
            city: "Oak Park",
            state: "IL",
            zipcode: "60301",
            types: [
              "physical",
              "search",
              "walking-distance",
              "default-vehicle-entrance",
            ],
          },
        ],
        redemption_instructions: [
          {
            illustration_id: "ggmmuyefup3xu8f6g13z",
            illustration_version: "1466114851",
            text:
              "<p>Scan your QR Code at the box with the red flashing lights. Hold the QR code about 2 inches away from the reader and the gate will open.</p>\r\n<p><strong>Please Note:</strong> For all reservation changes, please allow 15 minutes for updates to take effect.</p>",
            id: 8159,
            position: 1,
          },
          {
            illustration_id: "b2omz3upgcpjn44cyhjb",
            illustration_version: "1408636122",
            text: '<p>You may park anywhere that doesn\'t say "Reserved".</p>',
            id: 8160,
            position: 2,
          },
          {
            illustration_id: "ggmmuyefup3xu8f6g13z",
            illustration_version: "1466114851",
            text:
              "<p>When exiting, scan your QR Code again at the box with the red flashing lights.</p>",
            id: 8161,
            position: 3,
          },
          {
            illustration_id: "yaemlosarlqngsj63tch",
            illustration_version: "1408636305",
            text: "<p>The gate will open and you're free to go!</p>",
            id: 8162,
            position: 4,
          },
        ],
        mobile_enabled: true,
        parking_pass_type: "scan_in_out",
        support_description:
          "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
        facility_type: {
          slug: "garage",
          display_name: "Garage",
        },
        cancellation_allowed: "customer",
        amenities_full: [
          {
            slug: "self-park",
            name: "Self Park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          },
          {
            slug: "touchless",
            name: "Touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
          },
          {
            slug: "covered-parking",
            name: "Garage - Covered",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/covered-parking_pghvr4.svg",
          },
          {
            slug: "paved",
            name: "Lot - Uncovered",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          },
          {
            slug: "wheelchair",
            name: "Wheelchair Accessible",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          },
        ],
        images: [
          {
            id: "zaafdujznnlb7qtogaxv",
            version: "1575223914",
            center_x: 1415,
            center_y: 943,
            order: 0,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_1415,y_943/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575223914/zaafdujznnlb7qtogaxv.jpg",
          },
          {
            id: "bhja8zab5bge2qu4nvyv",
            version: "1575223907",
            center_x: 1440,
            center_y: 960,
            order: 1,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_1440,y_960/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575223907/bhja8zab5bge2qu4nvyv.jpg",
          },
          {
            id: "ilu8rn8cdyz4pinhiu1x",
            version: "1575223907",
            center_x: 1440,
            center_y: 960,
            order: 2,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_1440,y_960/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575223907/ilu8rn8cdyz4pinhiu1x.jpg",
          },
          {
            id: "qg2cef1ftynikz6uc55c",
            version: "1575223902",
            center_x: 1403,
            center_y: 935,
            order: 3,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_1403,y_935/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575223902/qg2cef1ftynikz6uc55c.jpg",
          },
          {
            id: "vtexstxhkz1juxa6qjul",
            version: "1575223928",
            center_x: 1440,
            center_y: 960,
            order: 4,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_1440,y_960/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575223928/vtexstxhkz1juxa6qjul.jpg",
          },
          {
            id: "oqo4e3l99idyp7gk5tfe",
            version: "1575223923",
            center_x: 1440,
            center_y: 960,
            order: 5,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_1440,y_960/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575223923/oqo4e3l99idyp7gk5tfe.jpg",
          },
          {
            id: "mwukfmitfe2uguclbdrj",
            version: "1575223915",
            center_x: 1440,
            center_y: 960,
            order: 8,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_1440,y_960/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575223915/mwukfmitfe2uguclbdrj.jpg",
          },
        ],
        facility_url: "https://spothero.com/checkout/7568/1135-westgate-st",
        rating_info: {
          number_of_ratings: 2885,
          star_rating: 4.470363951473137,
        },
        vehicle_size: "not_applicable",
        oversize_vehicle_type: null,
        oversize_description: null,
        transient_available: true,
        monthly_available: false,
        vehicle_restriction_description: null,
        supported_fee_types: [],
        operator_id: 2400039,
        online_commuter_rate: false,
        online_commuter_rate_description: "",
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
      },
      spotId: 7568,
      activeMarker: false,
      isFavorite: false,
      hasTravelDistanceUpdated: true,
      hidden: false,
      selectedRate: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 125118,
        price: 850,
        display_price: 800,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 7566,
        event_id: null,
        rule_trail: "125118",
        starts: "2020-10-30T12:00",
        ends: "2020-10-31T00:00",
        url:
          "https://spothero.com/checkout/7568/1135-westgate-st?starts=2020-10-30T12%3A00&ends=2020-10-31T00%3A00",
        duration: 12,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 800,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 850,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 1,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Garage - Covered",
            slug: "covered-parking",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/covered-parking_pghvr4.svg",
            sort_order: 4,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 5,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/7568/1135-westgate-st?rid=7566&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 7566,
      },
      url: "https://spothero.com/checkout/7568/1135-westgate-st",
      hasOversizedFee: false,
      oversizedFeeMessage: null,
      vehicleRestriction: null,
      distanceInMiles: 0.8829545454545454,
      walkingDuration: 1073,
    },
    {
      parking_spot_id: 14632,
      title: "1133 South Blvd. - Eleven33 Apartments - Garage",
      distance: 1376,
      latitude: 41.8864091,
      longitude: -87.80468789999998,
      lowest_price: 650,
      highest_price: 650,
      lowest_monthly_price: 0,
      highest_monthly_price: 0,
      default_image_url:
        "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_330,y_440/v1581525409/b6r1gt4zzwjowscnxuum.jpg",
      hourly_rates: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 778295,
        price: 650,
        display_price: 600,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 15860,
        event_id: null,
        rule_trail: "778295",
        starts: "2020-10-30T12:00",
        ends: "2020-10-31T00:00",
        url:
          "https://spothero.com/checkout/14632/1133-s-blvd-2?starts=2020-10-30T12%3A00&ends=2020-10-31T00%3A00",
        duration: 12,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 600,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 650,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 1,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "On-Site Staff",
            slug: "attendant",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/attendant_tur8dg.svg",
            sort_order: 4,
          },
          {
            name: "Garage - Covered",
            slug: "covered-parking",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/covered-parking_pghvr4.svg",
            sort_order: 5,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 6,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/14632/1133-s-blvd-2?rid=15860&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 15860,
      },
      monthly_rates: [],
      bulk_event_rates: [],
      license_plate_required: false,
      phone_number_required: true,
      timezone: "America/Chicago",
      spot_url: "https://spothero.com/checkout/14632/1133-s-blvd-2",
      wd_latitude: 41.8864091,
      wd_longitude: -87.80468789999998,
      commuter_card_eligible: false,
      publish_to_mobile: true,
      currency_type: "usd",
      currency_symbol: "$",
      rating_info: {
        number_of_ratings: 43,
        star_rating: 4.883720930232558,
      },
      available_transient_inventory: 174,
      facility: {
        id: 14632,
        parking_spot_id: 14632,
        title: "1133 South Blvd. - Eleven33 Apartments - Garage",
        description: "",
        status: "on_sales_allowed",
        slug: "1133-s-blvd-2",
        street_address: "1133 South Boulevard",
        city: "Oak Park",
        state: "IL",
        zipcode: "60302",
        latitude: 41.8864091,
        longitude: -87.80468789999998,
        company_id: 79,
        timezone: "America/Chicago",
        display_price_on_receipt: true,
        height_restriction: 98,
        height_restriction_description: "Height Restriction: 8' 2\"",
        barcode_type: "qrcode",
        post_purchase_instructions: "",
        restrictions: [
          "Height Restriction: 8' 2\"",
          "This facility does NOT allow in/out privileges. You CANNOT enter & exit more than once.",
        ],
        hours_of_operation: {
          text: ["This facility is open 24/7."],
          periods: [],
        },
        getting_here:
          "Enter this location at 1133 South Blvd. This garage is operated by SP+. It is located on the NW side of South Blvd. between N Blvd. and Pleasant St. Please reference the photos.",
        addresses: [
          {
            id: 15367,
            latitude: 41.8864091,
            longitude: -87.80468789999998,
            street_address: "1133 South Boulevard",
            city: "Oak Park",
            state: "IL",
            zipcode: "60302",
            types: [
              "physical",
              "search",
              "walking-distance",
              "default-vehicle-entrance",
            ],
          },
        ],
        redemption_instructions: [
          {
            illustration_id: "egujzas3s3lavcix5mit",
            illustration_version: "1408636215",
            text:
              "Scan your QR Code at the box with the red flashing lights. Hold the QR code about 2 inches away from the reader and the gate will open.",
            id: 32151,
            position: 1,
          },
          {
            illustration_id: "b2omz3upgcpjn44cyhjb",
            illustration_version: "1408636122",
            text: 'You may park anywhere that doesn\'t say "Reserved".',
            id: 32152,
            position: 2,
          },
          {
            illustration_id: "egujzas3s3lavcix5mit",
            illustration_version: "1408636215",
            text:
              "When exiting, scan your QR Code again at the box with the red flashing lights.",
            id: 32153,
            position: 3,
          },
          {
            illustration_id: "yaemlosarlqngsj63tch",
            illustration_version: "1408636305",
            text: "The gate will open and you're free to go!",
            id: 32154,
            position: 4,
          },
        ],
        mobile_enabled: true,
        parking_pass_type: "scan_in_out",
        support_description:
          "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
        facility_type: {
          slug: "garage",
          display_name: "Garage",
        },
        cancellation_allowed: "customer",
        amenities_full: [
          {
            slug: "self-park",
            name: "Self Park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          },
          {
            slug: "touchless",
            name: "Touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
          },
          {
            slug: "covered-parking",
            name: "Garage - Covered",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/covered-parking_pghvr4.svg",
          },
          {
            slug: "paved",
            name: "Lot - Uncovered",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          },
          {
            slug: "wheelchair",
            name: "Wheelchair Accessible",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          },
          {
            slug: "attendant",
            name: "On-Site Staff",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/attendant_tur8dg.svg",
          },
        ],
        images: [
          {
            id: "b6r1gt4zzwjowscnxuum",
            version: "1581525409",
            center_x: 330,
            center_y: 440,
            order: 0,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_330,y_440/v1581525409/b6r1gt4zzwjowscnxuum.jpg",
          },
          {
            id: "swvlfhhopzvnkdqcras0",
            version: "1581525441",
            center_x: 326,
            center_y: 213,
            order: 1,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_326,y_213/v1581525441/swvlfhhopzvnkdqcras0.png",
          },
          {
            id: "xodnsjvfaq0yayziwycg",
            version: "1581525477",
            center_x: 327,
            center_y: 211,
            order: 2,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_327,y_211/v1581525477/xodnsjvfaq0yayziwycg.png",
          },
          {
            id: "gvapcnbfpdj1ha6rmzks",
            version: "1581525440",
            center_x: 324,
            center_y: 205,
            order: 3,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_324,y_205/v1581525440/gvapcnbfpdj1ha6rmzks.png",
          },
          {
            id: "ut59h3yfmzuhye913x4m",
            version: "1581525426",
            center_x: 327,
            center_y: 210,
            order: 4,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_327,y_210/v1581525426/ut59h3yfmzuhye913x4m.png",
          },
          {
            id: "snklu4fo6e8av5ma1pyt",
            version: "1581525469",
            center_x: 327,
            center_y: 211,
            order: 5,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_327,y_211/v1581525469/snklu4fo6e8av5ma1pyt.png",
          },
          {
            id: "dnlsizbhfv9r5g0u9zrq",
            version: "1581525467",
            center_x: 322,
            center_y: 207,
            order: 6,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_322,y_207/v1581525467/dnlsizbhfv9r5g0u9zrq.png",
          },
          {
            id: "bjkun8cxzacaxajiytds",
            version: "1581525455",
            center_x: 328,
            center_y: 212,
            order: 7,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_328,y_212/v1581525455/bjkun8cxzacaxajiytds.png",
          },
          {
            id: "bbb4omwb6vrfu8hkkhtk",
            version: "1581525454",
            center_x: 326,
            center_y: 213,
            order: 8,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_326,y_213/v1581525454/bbb4omwb6vrfu8hkkhtk.png",
          },
          {
            id: "oqvchzunjk5oqs9qwhjg",
            version: "1581525425",
            center_x: 330,
            center_y: 216,
            order: 9,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_330,y_216/v1581525425/oqvchzunjk5oqs9qwhjg.png",
          },
          {
            id: "przudxa7e1vzoxupzfwo",
            version: "1581525408",
            center_x: 375,
            center_y: 250,
            order: 10,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_375,y_250/v1581525408/przudxa7e1vzoxupzfwo.jpg",
          },
        ],
        facility_url: "https://spothero.com/checkout/14632/1133-s-blvd-2",
        rating_info: {
          number_of_ratings: 43,
          star_rating: 4.883720930232558,
        },
        vehicle_size: "oversized",
        oversize_vehicle_type: null,
        oversize_description: null,
        transient_available: true,
        monthly_available: true,
        vehicle_restriction_description: null,
        supported_fee_types: [],
        operator_id: 7035521,
        online_commuter_rate: false,
        online_commuter_rate_description: "",
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
      },
      spotId: 14632,
      activeMarker: false,
      isFavorite: false,
      hasTravelDistanceUpdated: true,
      hidden: false,
      selectedRate: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 778295,
        price: 650,
        display_price: 600,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 15860,
        event_id: null,
        rule_trail: "778295",
        starts: "2020-10-30T12:00",
        ends: "2020-10-31T00:00",
        url:
          "https://spothero.com/checkout/14632/1133-s-blvd-2?starts=2020-10-30T12%3A00&ends=2020-10-31T00%3A00",
        duration: 12,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 600,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 650,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 1,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "On-Site Staff",
            slug: "attendant",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/attendant_tur8dg.svg",
            sort_order: 4,
          },
          {
            name: "Garage - Covered",
            slug: "covered-parking",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/covered-parking_pghvr4.svg",
            sort_order: 5,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 6,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/14632/1133-s-blvd-2?rid=15860&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 15860,
      },
      url: "https://spothero.com/checkout/14632/1133-s-blvd-2",
      hasOversizedFee: false,
      oversizedFeeMessage: null,
      vehicleRestriction: null,
      distanceInMiles: 1.0363636363636364,
      walkingDuration: 1250,
    },
    {
      parking_spot_id: 13263,
      title: "114 Madison St. - Lot",
      distance: 1381,
      latitude: 41.8802787,
      longitude: -87.7785732,
      lowest_price: 550,
      highest_price: 550,
      lowest_monthly_price: 0,
      highest_monthly_price: 0,
      default_image_url:
        "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_1280,y_720/v1567195328/pxqk7efkzmz3mtwbanjz.jpg",
      hourly_rates: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 187339,
        price: 550,
        display_price: 500,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 14384,
        event_id: null,
        rule_trail: "187339",
        starts: "2020-10-30T12:00",
        ends: "2020-10-30T16:00",
        url:
          "https://spothero.com/checkout/13263/114-madison-st?starts=2020-10-30T12%3A00&ends=2020-10-30T16%3A00",
        duration: 4,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 500,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 550,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "In & Out Allowed",
            slug: "in-out",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
            sort_order: 1,
          },
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 2,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 3,
          },
          {
            name: "On-Site Staff",
            slug: "attendant",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/attendant_tur8dg.svg",
            sort_order: 4,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 5,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/13263/114-madison-st?rid=14384&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 14384,
      },
      monthly_rates: [],
      bulk_event_rates: [],
      license_plate_required: true,
      phone_number_required: false,
      timezone: "America/Chicago",
      spot_url: "https://spothero.com/checkout/13263/114-madison-st",
      wd_latitude: 41.8802787,
      wd_longitude: -87.7785732,
      commuter_card_eligible: false,
      publish_to_mobile: true,
      currency_type: "usd",
      currency_symbol: "$",
      rating_info: {
        number_of_ratings: 9,
        star_rating: 5,
      },
      available_transient_inventory: 3,
      facility: {
        id: 13263,
        parking_spot_id: 13263,
        title: "114 Madison St. - Lot",
        description:
          '<p><strong>Please Note:</strong></p><p>If you need to change or update your license plate number after purchasing, you can do so under "My Reservations" in your account.</p>',
        status: "on_sales_allowed",
        slug: "114-madison-st",
        street_address: "114 Madison Street",
        city: "Oak Park",
        state: "IL",
        zipcode: "60302",
        latitude: 41.8802787,
        longitude: -87.7785732,
        company_id: 1753,
        timezone: "America/Chicago",
        display_price_on_receipt: true,
        height_restriction: null,
        height_restriction_description: null,
        barcode_type: "qrcode",
        post_purchase_instructions: "",
        restrictions: [
          "Standard sized vehicles only. Due to size constraints, this location is unable to accommodate minivans, midsize and large SUVs, pickup trucks, and passenger vans.",
        ],
        hours_of_operation: {
          text: ["This facility is open 24/7."],
          periods: [],
        },
        getting_here:
          "This lot is located in the alley behind 114 Madison St. From the intersection of Madison St and S Taylor Ave. head north on Taylor Ave. towards Washington Blvd. Turn left to enter the alley and head west through the alley until you reach the lot behind 114 Madison St. The lot is the 5th property west of Taylor Ave.",
        addresses: [
          {
            id: 13995,
            latitude: 41.8802787,
            longitude: -87.7785732,
            street_address: "114 Madison Street",
            city: "Oak Park",
            state: "IL",
            zipcode: "60302",
            types: [
              "physical",
              "search",
              "walking-distance",
              "default-vehicle-entrance",
            ],
          },
        ],
        redemption_instructions: [
          {
            illustration_id: "pp3uajdxl5u9lrnak1as",
            illustration_version: "1408636881",
            text:
              "Make sure your license plate matches the plate on your Parking Pass. Failure to do so will result in a ticket or tow.",
            id: 30275,
            position: 1,
          },
          {
            illustration_id: "b2omz3upgcpjn44cyhjb",
            illustration_version: "1408636122",
            text: 'You may park anywhere that doesn\'t say "Reserved".',
            id: 26141,
            position: 2,
          },
          {
            illustration_id: "hodnezajkpxuiisu0i4e",
            illustration_version: "1408636065",
            text: "Simply leave when you're ready to go!",
            id: 30277,
            position: 3,
          },
        ],
        mobile_enabled: true,
        parking_pass_type: "license_plate",
        support_description:
          "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
        facility_type: {
          slug: "lot",
          display_name: "Lot",
        },
        cancellation_allowed: "customer",
        amenities_full: [
          {
            slug: "self-park",
            name: "Self Park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          },
          {
            slug: "touchless",
            name: "Touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
          },
          {
            slug: "paved",
            name: "Lot - Uncovered",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          },
          {
            slug: "in-out",
            name: "In & Out Allowed",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
          },
          {
            slug: "attendant",
            name: "On-Site Staff",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/attendant_tur8dg.svg",
          },
        ],
        images: [
          {
            id: "pxqk7efkzmz3mtwbanjz",
            version: "1567195328",
            center_x: 1280,
            center_y: 720,
            order: 0,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_1280,y_720/v1567195328/pxqk7efkzmz3mtwbanjz.jpg",
          },
          {
            id: "tbpszq8iaq4d8ep8glc1",
            version: "1567195357",
            center_x: 1280,
            center_y: 720,
            order: 1,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_1280,y_720/v1567195357/tbpszq8iaq4d8ep8glc1.jpg",
          },
          {
            id: "yf0ipvkq7dqcs4ka2hcn",
            version: "1567195387",
            center_x: 1280,
            center_y: 720,
            order: 2,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_1280,y_720/v1567195387/yf0ipvkq7dqcs4ka2hcn.jpg",
          },
          {
            id: "sai9ccwj2jkyybsduugn",
            version: "1567195311",
            center_x: 1280,
            center_y: 720,
            order: 3,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,f_auto,h_$h,q_$q,w_$w,x_1280,y_720/v1567195311/sai9ccwj2jkyybsduugn.jpg",
          },
        ],
        facility_url: "https://spothero.com/checkout/13263/114-madison-st",
        rating_info: {
          number_of_ratings: 9,
          star_rating: 5,
        },
        vehicle_size: "not_applicable",
        oversize_vehicle_type: null,
        oversize_description: null,
        transient_available: true,
        monthly_available: true,
        vehicle_restriction_description:
          "Standard sized vehicles only. Due to size constraints, this location is unable to accommodate minivans, midsize and large SUVs, pickup trucks, and passenger vans.",
        supported_fee_types: [],
        operator_id: 5953536,
        online_commuter_rate: false,
        online_commuter_rate_description: "",
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
      },
      spotId: 13263,
      activeMarker: false,
      isFavorite: false,
      hasTravelDistanceUpdated: true,
      hidden: false,
      selectedRate: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 187339,
        price: 550,
        display_price: 500,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 14384,
        event_id: null,
        rule_trail: "187339",
        starts: "2020-10-30T12:00",
        ends: "2020-10-30T16:00",
        url:
          "https://spothero.com/checkout/13263/114-madison-st?starts=2020-10-30T12%3A00&ends=2020-10-30T16%3A00",
        duration: 4,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 500,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 550,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "In & Out Allowed",
            slug: "in-out",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/in-out_ccmaiu.svg",
            sort_order: 1,
          },
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 2,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 3,
          },
          {
            name: "On-Site Staff",
            slug: "attendant",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/attendant_tur8dg.svg",
            sort_order: 4,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 5,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/13263/114-madison-st?rid=14384&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 14384,
      },
      url: "https://spothero.com/checkout/13263/114-madison-st",
      hasOversizedFee: false,
      oversizedFeeMessage: null,
      vehicleRestriction:
        "Standard sized vehicles only. Due to size constraints, this location is unable to accommodate minivans, midsize and large SUVs, pickup trucks, and passenger vans.",
      distanceInMiles: 1.16875,
      walkingDuration: 1407,
    },
    {
      parking_spot_id: 11347,
      title: "2148 N Oak Park Ave. - Mars Metra Station Lot",
      distance: 3304,
      latitude: 41.9194339,
      longitude: -87.7951215,
      lowest_price: 266,
      highest_price: 266,
      lowest_monthly_price: 0,
      highest_monthly_price: 0,
      default_image_url:
        "https://res.cloudinary.com/spothero/image/upload/c_fill,f_auto,g_xy_center,h_98,q_50,w_145,x_2000,y_1333/v1575225396/ssbot9hl1sbzoydoiycb.jpg",
      hourly_rates: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 169437,
        price: 266,
        display_price: 216,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 12130,
        event_id: null,
        rule_trail: "169437",
        starts: "2020-10-30T12:00",
        ends: "2020-10-31T00:00",
        url:
          "https://spothero.com/checkout/11347/6801-w-shakespeare-ave?starts=2020-10-30T12%3A00&ends=2020-10-31T00%3A00",
        duration: 12,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 216,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 266,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 1,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 4,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/11347/6801-w-shakespeare-ave?rid=12130&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 12130,
      },
      monthly_rates: [],
      bulk_event_rates: [],
      license_plate_required: true,
      phone_number_required: true,
      timezone: "America/Chicago",
      spot_url: "https://spothero.com/checkout/11347/6801-w-shakespeare-ave",
      wd_latitude: 41.9194339,
      wd_longitude: -87.7951215,
      commuter_card_eligible: false,
      publish_to_mobile: true,
      currency_type: "usd",
      currency_symbol: "$",
      rating_info: {
        number_of_ratings: 5,
        star_rating: 3.4,
      },
      available_transient_inventory: 4,
      facility: {
        id: 11347,
        parking_spot_id: 11347,
        title: "2148 N Oak Park Ave. - Mars Metra Station Lot",
        description:
          '<p><strong>Please Note:</strong></p><p>If you need to change or update your license plate number after purchasing, you can do so under "My Reservations" in your account.</p>',
        status: "on_sales_allowed",
        slug: "6801-w-shakespeare-ave",
        street_address: "2148 North Oak Park Avenue",
        city: "Chicago",
        state: "IL",
        zipcode: "60707",
        latitude: 41.9194339,
        longitude: -87.7951215,
        company_id: 79,
        timezone: "America/Chicago",
        display_price_on_receipt: true,
        height_restriction: 76,
        height_restriction_description: "Height Restriction: 6' 4\"",
        barcode_type: "qrcode",
        post_purchase_instructions: "",
        restrictions: [
          "Height Restriction: 6' 4\"",
          "This facility does NOT allow in/out privileges. You CANNOT enter & exit more than once.",
        ],
        hours_of_operation: {
          text: ["This facility is open 24/7."],
          periods: [],
        },
        getting_here:
          "Arrive to the parking lot at 2148 N Oak Park Ave. This is the parking lot for the Mars Metra Station, operated by SP+. It is located on the east side of N Oak Park Ave, just northeast of the intersection of N Oak Park Ave and W Shakespeare Ave.",
        addresses: [
          {
            id: 12047,
            latitude: 41.9194339,
            longitude: -87.7951215,
            street_address: "2148 North Oak Park Avenue",
            city: "Chicago",
            state: "IL",
            zipcode: "60707",
            types: [
              "physical",
              "search",
              "walking-distance",
              "default-vehicle-entrance",
            ],
          },
        ],
        redemption_instructions: [
          {
            illustration_id: "pp3uajdxl5u9lrnak1as",
            illustration_version: "1408636881",
            text:
              "Make sure your license plate matches the plate on your Parking Pass. Failure to do so will result in a ticket or tow.",
            id: 26136,
            position: 1,
          },
          {
            illustration_id: "b2omz3upgcpjn44cyhjb",
            illustration_version: "1408636122",
            text: 'You may park anywhere that doesn\'t say "Reserved".',
            id: 26141,
            position: 2,
          },
          {
            illustration_id: "hodnezajkpxuiisu0i4e",
            illustration_version: "1408636065",
            text: "Simply leave when you're ready to go!",
            id: 26142,
            position: 3,
          },
        ],
        mobile_enabled: true,
        parking_pass_type: "license_plate",
        support_description:
          "<p><strong>Questions?</strong></p><p>Shoot us an email at support@spothero.com or give us a call at 844 324 7768. Our Customer Heroes are here to help!</p>",
        facility_type: {
          slug: "lot",
          display_name: "Lot",
        },
        cancellation_allowed: "customer",
        amenities_full: [
          {
            slug: "self-park",
            name: "Self Park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
          },
          {
            slug: "touchless",
            name: "Touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
          },
          {
            slug: "paved",
            name: "Lot - Uncovered",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
          },
          {
            slug: "wheelchair",
            name: "Wheelchair Accessible",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
          },
        ],
        images: [
          {
            id: "ssbot9hl1sbzoydoiycb",
            version: "1575225396",
            center_x: 2000,
            center_y: 1333,
            order: 0,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225396/ssbot9hl1sbzoydoiycb.jpg",
          },
          {
            id: "ojn3ewkebiaqbsmgzj7l",
            version: "1575225393",
            center_x: 2000,
            center_y: 1333,
            order: 1,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225393/ojn3ewkebiaqbsmgzj7l.jpg",
          },
          {
            id: "zqgasyavymg44czfh5p0",
            version: "1575225387",
            center_x: 2000,
            center_y: 1333,
            order: 2,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225387/zqgasyavymg44czfh5p0.jpg",
          },
          {
            id: "bku82oytnykmuiramvqa",
            version: "1575225393",
            center_x: 2000,
            center_y: 1333,
            order: 3,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225393/bku82oytnykmuiramvqa.jpg",
          },
          {
            id: "o45xtxuv23wke94c7eec",
            version: "1575225388",
            center_x: 2000,
            center_y: 1333,
            order: 4,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225388/o45xtxuv23wke94c7eec.jpg",
          },
          {
            id: "km99nefalyno57czqtea",
            version: "1575225381",
            center_x: 2000,
            center_y: 1333,
            order: 5,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225381/km99nefalyno57czqtea.jpg",
          },
          {
            id: "baejsn39fa0mzw4vu8ew",
            version: "1575225381",
            center_x: 2000,
            center_y: 1333,
            order: 6,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225381/baejsn39fa0mzw4vu8ew.jpg",
          },
          {
            id: "oqbvjxpkkw63jztynmbv",
            version: "1575225384",
            center_x: 2000,
            center_y: 1333,
            order: 7,
            url_template:
              "https://res.cloudinary.com/spothero/image/upload/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}/c_fill,g_xy_center,h_$h,w_$w,x_2000,y_1333/c_scale,fl_relative,g_south_east,l_logos:spothero,o_27,w_0.25,x_0.05,y_0.05/f_auto,q_$q/v1575225384/oqbvjxpkkw63jztynmbv.jpg",
          },
        ],
        facility_url:
          "https://spothero.com/checkout/11347/6801-w-shakespeare-ave",
        rating_info: {
          number_of_ratings: 5,
          star_rating: 3.4,
        },
        vehicle_size: "oversized",
        oversize_vehicle_type: null,
        oversize_description: null,
        transient_available: true,
        monthly_available: true,
        vehicle_restriction_description: null,
        supported_fee_types: [],
        operator_id: 4633154,
        online_commuter_rate: false,
        online_commuter_rate_description: "",
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
      },
      spotId: 11347,
      activeMarker: false,
      isFavorite: false,
      hasTravelDistanceUpdated: true,
      hidden: false,
      selectedRate: {
        rule_type: "multirate",
        title: "Default",
        rule_id: 169437,
        price: 266,
        display_price: 216,
        unavailable: false,
        unavailable_reason: "",
        rule_group_id: 12130,
        event_id: null,
        rule_trail: "169437",
        starts: "2020-10-30T12:00",
        ends: "2020-10-31T00:00",
        url:
          "https://spothero.com/checkout/11347/6801-w-shakespeare-ave?starts=2020-10-30T12%3A00&ends=2020-10-31T00%3A00",
        duration: 12,
        currency_type: "usd",
        currency_symbol: "$",
        price_breakdown: {
          items: [
            {
              price: 216,
              type: "rental",
              short_description: "Subtotal",
              full_description: "",
            },
            {
              price: 50,
              type: "blanket_fee",
              short_description: "Service Fee",
              full_description:
                "The service fee helps us cover the costs of running our platform and providing services related to your reservation. For more information, visit our FAQs.",
            },
          ],
          currency: "usd",
          total_price: 266,
        },
        online_commuter_rate: false,
        online_commuter_rate_description: null,
        online_commuter_rate_enter_start: null,
        online_commuter_rate_enter_end: null,
        amenities: [
          {
            name: "Self Park",
            slug: "self-park",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/self-park_q4ppzl.svg",
            sort_order: 1,
          },
          {
            name: "Touchless",
            slug: "touchless",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/touchless.svg",
            sort_order: 2,
          },
          {
            name: "Wheelchair Accessible",
            slug: "wheelchair",
            visible: true,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/wheelchair_s08czs.svg",
            sort_order: 3,
          },
          {
            name: "Lot - Uncovered",
            slug: "paved",
            visible: false,
            icon_url:
              "http://res.cloudinary.com/spothero/image/upload/v1589995910/amenity_icons/paved_u1xmia.svg",
            sort_order: 4,
          },
        ],
        parking_type: "self",
        hidden: false,
        newMonthlyRate: false,
        fullUrl:
          "/checkout/11347/6801-w-shakespeare-ave?rid=12130&starts=2020-10-30T12:00&ends=2020-10-30T15:00",
        access_hours_formatted: [
          {
            type: "247",
          },
        ],
        fullRule: 12130,
      },
      url: "https://spothero.com/checkout/11347/6801-w-shakespeare-ave",
      hasOversizedFee: false,
      oversizedFeeMessage: null,
      vehicleRestriction: null,
      distanceInMiles: 2.274810606060606,
      walkingDuration: 2750,
    },
  ],
  error: null,
};
