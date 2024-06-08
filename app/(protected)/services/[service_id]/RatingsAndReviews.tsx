"use client"
import { Button } from "@/components/Button"
import { Avatar, Divider, Input, List, Rate } from "antd"
import React from "react"

const reviews = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/543e/d72b/085dc6ad0de144c568dfee838698b85b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVpaCTRTeMvivdkErhTN2LudotocJWzSiHJIWO~67e~IQmWjNLUVfqcHyVDUlLp7GtXCT5FYdKbgFTqjCFGo1fepu-7kEe~yL-CiW6p0Y7UvcObBn646cBWRlFt~WJ7R7Ikaax~tpJ~ChDRZ8b1mmIBdL82IRj6XFmcaJdVaMj5BWnJg9qC6YO6S2GvBUAlLTfuT2ooXqSSrx9Xi6ivWre8y-YxOuzoeHbnkeXi9nJxuwCMtS72pbivG3eMA~GWtJ66tnRu8qMOz5xNEDWpS4ijandZK0eMoBsK3NPP6ag1SFAo4LvkCkeXBnnfGHbtEvQ8vKy63-0oGY9osiRhfpQ__",
    rating: 4.5,
    message:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    date: "February 3, 2024",
    name: "John Doe",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/543e/d72b/085dc6ad0de144c568dfee838698b85b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVpaCTRTeMvivdkErhTN2LudotocJWzSiHJIWO~67e~IQmWjNLUVfqcHyVDUlLp7GtXCT5FYdKbgFTqjCFGo1fepu-7kEe~yL-CiW6p0Y7UvcObBn646cBWRlFt~WJ7R7Ikaax~tpJ~ChDRZ8b1mmIBdL82IRj6XFmcaJdVaMj5BWnJg9qC6YO6S2GvBUAlLTfuT2ooXqSSrx9Xi6ivWre8y-YxOuzoeHbnkeXi9nJxuwCMtS72pbivG3eMA~GWtJ66tnRu8qMOz5xNEDWpS4ijandZK0eMoBsK3NPP6ag1SFAo4LvkCkeXBnnfGHbtEvQ8vKy63-0oGY9osiRhfpQ__",
    rating: 4.5,
    message:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    date: "February 3, 2024",
    name: "John Doe",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/543e/d72b/085dc6ad0de144c568dfee838698b85b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVpaCTRTeMvivdkErhTN2LudotocJWzSiHJIWO~67e~IQmWjNLUVfqcHyVDUlLp7GtXCT5FYdKbgFTqjCFGo1fepu-7kEe~yL-CiW6p0Y7UvcObBn646cBWRlFt~WJ7R7Ikaax~tpJ~ChDRZ8b1mmIBdL82IRj6XFmcaJdVaMj5BWnJg9qC6YO6S2GvBUAlLTfuT2ooXqSSrx9Xi6ivWre8y-YxOuzoeHbnkeXi9nJxuwCMtS72pbivG3eMA~GWtJ66tnRu8qMOz5xNEDWpS4ijandZK0eMoBsK3NPP6ag1SFAo4LvkCkeXBnnfGHbtEvQ8vKy63-0oGY9osiRhfpQ__",
    rating: 4.5,
    message:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    date: "February 3, 2024",
    name: "John Doe",
  },
]

export const RatingsAndReviews = () => {
  return (
    <div className="bg-white p-7 rounded-xl my-9">
      <h3 className="md:text-2xl text-lg">Ratings and Reviews</h3>
      <Divider />
      <div>
        <p>Submit a review</p>
        <div className="flex gap-5 md:items-center md:flex-row flex-col my-2">
          <Input
            className="md:w-[445px] w-full"
            size="large"
            placeholder="Write your experience"
          />
          <Button className="text-[12px]" style={{ padding: "0.7rem 2rem" }}>
            Submit Review
          </Button>
        </div>
      </div>

      <div className="my-10">
        <List
          dataSource={reviews}
          grid={{ column: 1 }}
          pagination={{ pageSize: 2, align: "start", size: "small" }}
          renderItem={(review) => {
            return (
              <List.Item>
                <div className="flex items-center gap-2 mb-3">
                  <Avatar src={review.image} size={32} />
                  <p>{review.name}</p>
                </div>
                <div className="flex items-center gap-2 text-[12px] mb-3">
                  <Rate
                    value={review.rating}
                    className="text-[12px] text-[#01875F]"
                    disabled
                  />
                  <p>{review.date}</p>
                </div>
                <div className="mb-[2rem] text-[#5F6368]">
                  <p>{review.message}</p>
                </div>
              </List.Item>
            )
          }}
        />
      </div>
    </div>
  )
}
