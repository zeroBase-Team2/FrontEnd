import CandidateList from "@/components/candidate/candidate-list";
import Participant from "@/public/mobile/participant.svg";
import BottomArrow from "@/public/svg/bottom-arrow.svg";
import { useState } from "react";
import DateAndParticipantCount from "./date-and-participant-count";

export default function LastVoteResultItem() {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);

  const handleClickOpenHistory = () => {
    setIsOpenDetail((prev) => {
      return !prev;
    });
  };

  return (
    <div className="w-full">
      <div
        className={`flex h-[89px] items-center border lg:h-[100px] ${isOpenDetail ? "rounded-t-[12px] border-black-001" : "rounded-[12px] border-white-005"} bg-white-001 px-[18px] font-bold lg:pl-[30px] lg:pr-[40px]`}
      >
        <div className="flex w-full justify-between lg:h-[36px]">
          <div className="flex size-full flex-col lg:w-auto lg:flex-row">
            <div className="flex items-center justify-between">
              <span className="flex w-[49px] items-center justify-center rounded-[6px] bg-yellow-001 px-[8px] py-[4px] text-[11px] leading-[16.71px] lg:w-[66px] lg:px-[8px] lg:py-[8.5px] lg:text-[16px] lg:leading-[19.09px]">
                32주차
              </span>
              <div className="flex h-[12px] items-center justify-center lg:hidden">
                <Participant />
                <span className="ml-[4px] text-[12px] font-medium leading-[12px] text-gray-007">
                  24명
                </span>
              </div>
            </div>
            <p className="mt-[6px] flex items-center text-[16px] leading-[22.4px] lg:ml-[10px] lg:mt-0 lg:text-[24px] lg:leading-[24px]">
              야구장에서 가장 짜릿했던 응원곡은?
            </p>
          </div>
          <button
            type="button"
            onClick={handleClickOpenHistory}
            className={`hidden size-[24px] h-full lg:flex lg:items-center lg:justify-center ${isOpenDetail ? "rotate-180" : "rotate-[360deg]"}`}
          >
            <BottomArrow />
          </button>
        </div>
      </div>
      {isOpenDetail && (
        <div className="rounded-b-[12px] border-x border-b px-[16px] py-[24px] lg:px-[50px] lg:pb-[50px] lg:pt-[40px]">
          <CandidateList />
          <DateAndParticipantCount />
        </div>
      )}
    </div>
  );
}