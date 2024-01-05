"use client"
import Image from "next/image"
import React from "react"
import Fade from "react-reveal/Fade"

export const TopQuality = () => {
    return (
        <div className="md:p-[60px] p-[20px] container_xl md:w-[80%] md:mx-auto">
            <h3 className="md:text-[51px] text-[24px] text-center text-primary font-bold md:mb-[110px] mb-[30px]">
                Top quality Care services
            </h3>
            <Fade cascade bottom>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 md-grid-cols-1 md:gap-[32px] gap-[16px] items-stretch">
                    <Fade left>
                        <div className="h-full">
                            <div className="relative w-full h-[255px]">
                                <Image
                                    src={"/img6.svg"}
                                    alt="Image"
                                    fill
                                    className="md:rounded-t-[12px]"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="md:h-[220px] xl:h-[200px] p-[24px] border-[1px] border-[#D3D3D3]">
                                <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                                    Home Care - Domiciliary
                                </h3>
                                <p>Addressing daily living needs with respect and dignity.</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="h-full">
                            <div className="relative w-full h-[255px]">
                                <Image
                                    src={"/img7.svg"}
                                    alt="Image"
                                    fill
                                    className="md:rounded-t-[12px]"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="md:h-[220px] xl:h-[200px] p-[24px] border-[1px] border-[#D3D3D3]">
                                <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                                    Companionship Care
                                </h3>
                                <p>Keeping your loved ones socially engaged and active.</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="h-full">
                            <div className="relative w-full h-[255px]">
                                <Image
                                    src={"/img8.svg"}
                                    alt="Image"
                                    fill
                                    className="md:rounded-t-[12px]"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="md:h-[220px] xl:h-[200px] p-[24px] border-[1px] border-[#D3D3D3]">
                                <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                                    Supported living
                                </h3>
                                <p>
                                    Providing primary caregivers with the relief they need to
                                    recharge.
                                </p>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="h-full">
                            <div className="relative w-full h-[255px]">
                                <Image
                                    src={"/img9.svg"}
                                    alt="Image"
                                    fill
                                    className="md:rounded-t-[12px]"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="md:h-[220px] xl:h-[200px] p-[24px] border-[1px] border-[#D3D3D3]">
                                <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                                    Dementia Care
                                </h3>
                                <p>
                                    Specialist support tailored to the unique challenges of living
                                    with
                                </p>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="h-full">
                            <div className="relative w-full h-[255px]">
                                <Image
                                    src={"/img10.svg"}
                                    alt="Image"
                                    fill
                                    className="md:rounded-t-[12px]"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="md:h-[220px] xl:h-[200px] p-[24px] border-[1px] border-[#D3D3D3]">
                                <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                                    Live-in Care
                                </h3>
                                <p>
                                    Continuous support to maintain a safe and independent
                                    lifestyle at home.
                                </p>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="h-full">
                            <div className="relative w-full h-[255px]">
                                <Image
                                    src={"/img11.svg"}
                                    alt="Image"
                                    fill
                                    className="md:rounded-t-[12px]"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="md:h-[220px] xl:h-[200px] p-[24px] border-[1px] border-[#D3D3D3]">
                                <h3 className="lg:text-[32px] text-[20px] text-primary mb-[20px]">
                                    Rehabilitation Services
                                </h3>
                                <p>
                                    Assisting with recovery and wellness to enhance quality of
                                    life.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}
