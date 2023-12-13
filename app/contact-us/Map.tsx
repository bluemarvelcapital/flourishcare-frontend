"use client"
import React from "react"

export function Map() {
  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-[250px] md:h-[500px]">
      <iframe
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=39%20Priestleys,%20Luton%20LU1%205QL+(Flourish%20Advanced%20Care)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Population Estimator map</a>
      </iframe>
    </div>
  )
}
