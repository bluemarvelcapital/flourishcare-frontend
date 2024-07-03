"use client"
import { Button } from "@/components/Button"
import { useAuth } from "@/hooks/useAuth"
import { useToastify } from "@/hooks/useToastify"
import { ReviewI } from "@/interface/review"
import {
  useGetReviewsQuery,
  useSubmitReviewMutation,
} from "@/services/reviews.service"
import { LoadingOutlined } from "@ant-design/icons"
import { Avatar, Divider, Input, List, Rate } from "antd"
import moment from "moment"
import { useParams } from "next/navigation"
import React, { useState } from "react"

export const RatingsAndReviews = ({ reviews }: { reviews: ReviewI[] }) => {
  const { service_id } = useParams() as { service_id: string }
  const {
    auth: { accessToken },
  } = useAuth()
  const { errorToast, successToast } = useToastify()
  const { data, refetch } = useGetReviewsQuery({
    accessToken,
    serviceId: service_id,
  })
  const [mutate, { isLoading }] = useSubmitReviewMutation()
  const [remarks, setRemarks] = useState<string>("")
  const [rating, setRating] = useState<number>(0)

  const handleSubmit = async () => {
    try {
      await mutate({
        accessToken,
        remarks,
        rating,
        serviceId: service_id,
      }).unwrap()
      successToast("Review Submitted.")
      refetch()
    } catch (error: any) {
      errorToast(error?.message || error?.data?.message || "An Error Occured")
    }
  }
  return (
    <div className="bg-white p-7 rounded-xl my-9">
      <h3 className="md:text-2xl text-lg">Ratings and Reviews</h3>
      <Divider />
      <div>
        <p>Submit a review</p>
        <div className="flex gap-5 md:flex-row items-start flex-col my-2">
          <div>
            <Input
              className="md:w-[445px] w-full"
              size="large"
              placeholder="Write your experience"
              onChange={(e) => setRemarks(e.target.value)}
            />
            <div className="mt-3">
              <Rate
                className="text-success"
                onChange={(value) => setRating(value)}
              />
            </div>
          </div>
          <Button
            className="text-[12px]"
            style={{ padding: "0.7rem 2rem" }}
            onClick={handleSubmit}
            disabled={isLoading || !remarks || !rating}
          >
            {isLoading ? <LoadingOutlined /> : "Submit Review"}
          </Button>
        </div>
      </div>

      <div className="my-10">
        <List
          dataSource={data?.slice()?.reverse() || reviews?.slice()?.reverse()}
          grid={{ column: 1 }}
          pagination={{ pageSize: 3, align: "start", size: "small" }}
          renderItem={(review) => {
            return (
              <List.Item>
                <div className="flex items-center gap-2 mb-3">
                  <Avatar
                    src={review.user.profilePicture}
                    size={32}
                    className="bg-success"
                  >
                    {review.user.firstname![0]}
                  </Avatar>
                  <p>{`${review.user.firstname} ${review.user.lastname}`}</p>
                </div>
                <div className="flex items-center gap-2 text-[12px] mb-3">
                  <Rate
                    value={review.rating}
                    className="text-[12px] text-[#01875F]"
                    disabled
                  />
                  <p>{moment(review.createdAt).format("LL LT")}</p>
                </div>
                <div className="mb-[2rem] text-[#5F6368]">
                  <p>{review.remarks}</p>
                </div>
              </List.Item>
            )
          }}
        />
      </div>
    </div>
  )
}
