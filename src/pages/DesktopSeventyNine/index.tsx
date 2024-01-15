import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopSeventyNinePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[118px] justify-start mx-auto overflow-auto pb-[66px] w-full">
        <div className="flex flex-col items-center pr-[72px] md:px-5 w-full">
          <div className="h-[3415px] sm:h-[3989px] relative w-full">
            <div className="h-[3415px] m-auto w-full">
              <div className="absolute h-[3415px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[3415px] m-auto object-cover rotate-[45deg] w-full"
                  src="images/img_ellipse19.png"
                  alt="ellipseNineteen"
                />
                <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start mx-auto w-auto">
                  <div className="flex flex-col gap-6 items-center justify-center max-w-[719px] w-full">
                    <Button
                      className="cursor-pointer font-bold font-helvetica min-w-[173px] rounded-[23px] text-center text-xl"
                      size="xs"
                      variant="gradient"
                      color="white_A700_cyan_A200_00"
                    >
                      UNIQUE FILES
                    </Button>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-full"
                      size="txtAxiformaBlack40"
                    >
                      <span className="text-white-A700 font-axiforma font-black">
                        How to{" "}
                      </span>
                      <span className="text-cyan-400_01 font-axiforma font-light italic">
                        Create & Sell
                      </span>
                      <span className="text-white-A700 font-axiforma font-black">
                        {" "}
                        Your NFT Files.
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="md:h-[220px] h-[236px] relative w-full">
                        <Img
                          className="absolute h-[72px] object-cover right-[3%] top-[0] w-[72px]"
                          src="images/img_coinwallet.png"
                          alt="coinwallet"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[215px] inset-x-[0] items-center justify-start mx-auto p-[50px] md:px-10 sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group3.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                              size="txtAxiformaSemiBold22"
                            >
                              Set Up Your Wallet
                            </Text>
                            <Text
                              className="leading-[150.00%] max-w-[487px] md:max-w-full text-white-A700_a2 text-xl"
                              size="txtHelvetica20"
                            >
                              <>
                                Connect your wallet to Nico by clicking the
                                wallet icon in the top right corner after
                                you&#39;ve set it up.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[218px] h-[236px] relative w-full">
                        <Img
                          className="absolute h-[72px] object-cover right-[3%] top-[0] w-[72px]"
                          src="images/img_addnew.png"
                          alt="addnew"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[215px] inset-x-[0] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group3.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-6 items-start justify-start my-[11px] w-auto sm:w-full">
                            <Text
                              className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                              size="txtAxiformaSemiBold22"
                            >
                              Create Unique Collection
                            </Text>
                            <Text
                              className="leading-[150.00%] max-w-[529px] md:max-w-full text-white-A700_a2 text-xl"
                              size="txtHelvetica20"
                            >
                              Set a secondary sales fee and add social links, a
                              description, profile and banner images, and a
                              description.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[216px] h-[236px] relative w-full">
                        <Img
                          className="absolute h-[72px] object-cover right-[3%] top-[0] w-[72px]"
                          src="images/img_nft.png"
                          alt="nft"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[215px] inset-x-[0] items-end justify-start mx-auto p-[27px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group3.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-6 items-start justify-start my-[21px] w-auto sm:w-full">
                            <Text
                              className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                              size="txtAxiformaSemiBold22"
                            >
                              Download NFTs
                            </Text>
                            <Text
                              className="leading-[150.00%] max-w-[540px] md:max-w-full text-white-A700_a2 text-xl"
                              size="txtHelvetica20"
                            >
                              Add a title and description to your work (picture,
                              video, audio, or 3D art), then customize your NFTs
                              with properties.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[218px] h-[236px] relative w-full">
                        <Img
                          className="absolute h-[72px] object-cover right-[3%] top-[0] w-[72px]"
                          src="images/img_sell.png"
                          alt="sell"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[215px] inset-x-[0] items-center justify-start mx-auto p-[38px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group3.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-6 items-start justify-start my-[11px] w-auto sm:w-full">
                            <Text
                              className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                              size="txtAxiformaSemiBold22"
                            >
                              Put Them Up for Sale
                            </Text>
                            <Text
                              className="leading-[150.00%] max-w-[529px] md:max-w-full text-white-A700_a2 text-xl"
                              size="txtHelvetica20"
                            >
                              <>
                                Auctions, fixed-price listings, and
                                declining-price listings are all options. You
                                decide how you&#39;d like to sell your NFTs.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[1100px] left-[0] object-cover rotate-[45deg] top-[0] w-[83%]"
                src="images/img_ellipse18.png"
                alt="ellipseEighteen"
              />
              <div className="absolute h-[2145px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="h-[2145px] m-auto w-full">
                  <Img
                    className="h-[2145px] m-auto object-cover rotate-[45deg] w-full"
                    src="images/img_ellipse18_2145x1440.png"
                    alt="ellipseEighteen_One"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat h-[1143px] md:h-[504px] p-[91px] md:px-10 sm:px-5 right-[0] top-[3%] w-[54%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_frame121.png')",
                    }}
                  >
                    <div className="absolute bg-white-A700 flex flex-col items-center justify-start right-[8%] rounded-[251px] top-[15%] w-[503px]">
                      <Img
                        className="h-[504px] sm:h-auto object-cover rounded-[251px] w-[503px] md:w-full"
                        src="images/img_image4.png"
                        alt="imageFour"
                      />
                    </div>
                    <div className="absolute bg-gray-900 bottom-[36%] flex flex-col h-44 md:h-auto items-center justify-center left-[20%] outline outline-[1px] p-8 purple_A400_pink_A400_border sm:px-5 rounded-[88px] w-[177px]">
                      <Text
                        className="leading-[118.50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        <>
                          Cyber
                          <br />
                          Samurai
                          <br />
                          #177
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col font-helvetica md:gap-10 gap-32 inset-x-[0] items-start justify-start mx-auto top-[2%] w-[89%]">
                  <div className="flex flex-col md:gap-10 gap-[213px] items-start justify-start w-full">
                    <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="bg-clip-text bg-gradient1  sm:text-2xl md:text-[26px] text-[28px] text-transparent w-auto"
                        size="txtHelveticaBold28"
                      >
                        KNFT.
                      </Text>
                      <ul className="flex sm:flex-col flex-row gap-[45px] sm:hidden items-start justify-start w-auto common-row-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700 text-xl"
                          >
                            <Text size="txtHelvetica20WhiteA700">Home</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:text-white-A700 text-white-A700_6d text-xl"
                          >
                            <Text size="txtHelvetica20WhiteA7006d">
                              All NFTs
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:text-white-A700 text-white-A700_6d text-xl"
                          >
                            <Text size="txtHelvetica20WhiteA7006d">Team</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:text-white-A700 text-white-A700_6d text-xl"
                          >
                            <Text size="txtHelvetica20WhiteA7006d">
                              Terms & Co.
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:text-white-A700 text-white-A700_6d text-xl"
                          >
                            <Text size="txtHelvetica20WhiteA7006d">
                              Contact
                            </Text>
                          </a>
                        </li>
                      </ul>
                      <Button
                        className="bg-transparent border border-solid cursor-pointer font-bold min-w-[201px] pink_400_pink_A200_00_border text-center text-xl"
                        shape="round"
                        color="white_A700_0c"
                      >
                        Get in Touch
                      </Button>
                    </header>
                    <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col relative w-full">
                        <div className="flex flex-col gap-8 items-start justify-start mx-auto w-auto">
                          <Text
                            className="leading-[130.00%] sm:text-[41.74px] md:text-[47.74px] text-[55.74px] text-white-A700"
                            size="txtAxiformaBlack5574"
                          >
                            <span className="text-white-A700 font-axiforma text-left font-black">
                              <>
                                Buy, Create &<br />
                                Sell{" "}
                              </>
                            </span>
                            <span className="text-cyan-400_01 font-axiforma text-left font-light italic">
                              Unique NFTs
                            </span>
                            <span className="text-white-A700 font-axiforma text-left font-black">
                              {" "}
                              File.
                            </span>
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[494px] md:max-w-full text-white-A700_a2 text-xl"
                            size="txtHelvetica20"
                          >
                            NFTs are used for digital art and collectibles,
                            GameFi projects, metaverses, and more.
                          </Text>
                        </div>
                        <Img
                          className="h-[84px] ml-auto mr-[18px] mt-[-39.65px] object-cover w-[84px] z-[1]"
                          src="images/img_image6.png"
                          alt="imageSix"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[208px] text-center text-xl"
                        shape="round"
                        variant="gradient"
                        color="purple_A400_pink_A400"
                      >
                        Explore NFTs
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col font-axiforma gap-8 items-start justify-start w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_eye.png"
                        alt="eye"
                      />
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtAxiformaBold32"
                      >
                        Nico NFT Marketplace Overview
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700_a2 text-xl w-auto"
                          size="txtHelvetica20"
                        >
                          World Arts
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                          size="txtAxiformaBold32"
                        >
                          30.000 +
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700_a2 text-xl w-auto"
                          size="txtHelvetica20"
                        >
                          Digital Artists
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                          size="txtAxiformaBold32"
                        >
                          17.000 +
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700_a2 text-xl w-auto"
                          size="txtHelvetica20"
                        >
                          Live Auctions
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                          size="txtAxiformaBold32"
                        >
                          22.000 +
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700_a2 text-xl w-auto"
                          size="txtHelvetica20"
                        >
                          Unique Products
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                          size="txtAxiformaBold32"
                        >
                          50.000 +
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[24%] flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start mx-auto w-auto">
              <div className="flex flex-col font-axiforma gap-8 items-center justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                  size="txtAxiformaBlack40"
                >
                  <span className="text-cyan-400 font-axiforma font-light italic">
                    Most Popular{" "}
                  </span>
                  <span className="text-white-A700 font-axiforma font-black">
                    NFTs
                  </span>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[81px] items-start justify-start w-auto md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-start p-1.5"
                    style={{
                      backgroundImage: "url('images/img_group47475.png')",
                    }}
                  >
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtAxiformaMedium22"
                    >
                      All
                    </Text>
                  </div>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700_a2 md:text-xl w-auto"
                    size="txtAxiformaMedium22WhiteA700a2"
                  >
                    Hape prime
                  </Text>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700_a2 md:text-xl w-auto"
                    size="txtAxiformaMedium22WhiteA700a2"
                  >
                    Lazy Lions
                  </Text>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700_a2 md:text-xl w-auto"
                    size="txtAxiformaMedium22WhiteA700a2"
                  >
                    Peaceful ape
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start w-auto md:w-full">
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700_07 flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-[16px] w-full">
                    <div className="relative w-full">
                      <Img
                        className="h-full m-auto object-cover rounded-lg w-[341px]"
                        src="images/img_image8.png"
                        alt="imageEight"
                      />
                      <Button
                        className="absolute flex h-12 items-center justify-center right-[5%] top-[5%] w-12"
                        shape="round"
                        color="white_A700_16"
                        size="xs"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame1000001249.png"
                          alt="frame1000001249"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col font-axiforma gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtAxiformaSemiBold22"
                        >
                          Cyber Samurai #575
                        </Text>
                        <div className="flex flex-row gap-[7px] items-end justify-start w-auto">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_ethereum.png"
                            alt="ethereum"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtAxiformaSemiBold22"
                          >
                            8.5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_One"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Two"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Three"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Four"
                        />
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold text-center text-xl w-full"
                      shape="round"
                      variant="gradient"
                      color="purple_A400_pink_A400"
                    >
                      Buy Product
                    </Button>
                  </div>
                  <div className="bg-white-A700_07 flex flex-1 flex-col font-axiforma gap-8 h-full items-start justify-start p-8 sm:px-5 rounded-[16px] w-full">
                    <div className="relative w-full">
                      <Img
                        className="h-[425px] m-auto object-cover rounded-lg w-full"
                        src="images/img_image10.png"
                        alt="imageTen"
                      />
                      <Button
                        className="absolute flex h-12 items-center justify-center right-[4%] top-[4%] w-12"
                        shape="round"
                        color="white_A700_16"
                        size="xs"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame1000001249.png"
                          alt="frame1000001249"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtAxiformaSemiBold22"
                        >
                          Cyber Samurai #784
                        </Text>
                        <div className="flex flex-row gap-[7px] items-end justify-start w-auto">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_ethereum.png"
                            alt="ethereum"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtAxiformaSemiBold22"
                          >
                            7.5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_One"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Two"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Three"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_07 flex flex-1 flex-col font-axiforma gap-8 h-[579px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-[16px] w-full">
                    <div className="relative w-full">
                      <Img
                        className="h-full m-auto object-cover rounded-lg w-full"
                        src="images/img_image7.png"
                        alt="imageSeven"
                      />
                      <Button
                        className="absolute flex h-12 items-center justify-center right-[5%] top-[4%] w-12"
                        shape="round"
                        color="white_A700_16"
                        size="xs"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame1000001249.png"
                          alt="frame1000001249"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtAxiformaSemiBold22"
                        >
                          Cyber Samurai #475
                        </Text>
                        <div className="flex flex-row gap-[7px] items-end justify-start w-auto">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_ethereum.png"
                            alt="ethereum"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtAxiformaSemiBold22"
                          >
                            15.5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_One"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Two"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Three"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_07 flex flex-1 flex-col font-axiforma gap-8 h-full items-start justify-start p-8 sm:px-5 rounded-[16px] w-full">
                    <div className="relative w-full">
                      <Img
                        className="h-[425px] m-auto object-cover rounded-lg w-[339px]"
                        src="images/img_image11.png"
                        alt="imageEleven"
                      />
                      <Button
                        className="absolute flex h-12 items-center justify-center right-[4%] top-[4%] w-12"
                        shape="round"
                        color="white_A700_16"
                        size="xs"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame1000001249.png"
                          alt="frame1000001249"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtAxiformaSemiBold22"
                        >
                          Cyber Samurai #784
                        </Text>
                        <div className="flex flex-row gap-[7px] items-end justify-start w-auto">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_ethereum.png"
                            alt="ethereum"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtAxiformaSemiBold22"
                          >
                            7.5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_One"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Two"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Three"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_07 flex flex-1 flex-col font-axiforma gap-8 h-full items-start justify-start p-8 sm:px-5 rounded-[16px] w-full">
                    <div className="relative w-full">
                      <Img
                        className="h-[425px] m-auto object-cover rounded-lg w-[339px]"
                        src="images/img_image12.png"
                        alt="imageTwelve"
                      />
                      <Button
                        className="absolute flex h-12 items-center justify-center right-[4%] top-[4%] w-12"
                        shape="round"
                        color="white_A700_16"
                        size="xs"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame1000001249.png"
                          alt="frame1000001249"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtAxiformaSemiBold22"
                        >
                          Cyber Samurai #784
                        </Text>
                        <div className="flex flex-row gap-[7px] items-end justify-start w-auto">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_ethereum.png"
                            alt="ethereum"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtAxiformaSemiBold22"
                          >
                            7.5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_One"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Two"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Three"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_07 flex flex-1 flex-col font-axiforma gap-8 h-[579px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-[16px] w-full">
                    <div className="relative w-full">
                      <Img
                        className="h-[425px] m-auto object-cover rounded-lg w-[339px]"
                        src="images/img_image13.png"
                        alt="imageThirteen"
                      />
                      <Button
                        className="absolute flex h-12 items-center justify-center right-[4%] top-[4%] w-12"
                        shape="round"
                        color="white_A700_16"
                        size="xs"
                      >
                        <Img
                          className="h-6"
                          src="images/img_frame1000001249.png"
                          alt="frame1000001249"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtAxiformaSemiBold22"
                        >
                          Cyber Samurai #475
                        </Text>
                        <div className="flex flex-row gap-[7px] items-end justify-start w-auto">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_ethereum.png"
                            alt="ethereum"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtAxiformaSemiBold22"
                          >
                            15.5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_One"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Two"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Three"
                        />
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[18px]"
                          src="images/img_christmasstar.png"
                          alt="christmasstar_Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="bg-transparent border border-solid cursor-pointer font-bold font-helvetica min-w-[238px] pink_400_pink_A200_00_border2 text-center text-xl"
                shape="round"
                color="white_A700_0c"
              >
                Explore All NFTs
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-helvetica items-end pl-20 md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                  size="txtAxiformaBlack40"
                >
                  Browse by Category
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[529px] md:max-w-full text-center text-white-A700_a2 text-xl"
                  size="txtHelvetica20"
                >
                  Set a secondary sales fee and add social links, a description,
                  profile and banner images, and a description.
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-[402px] sm:h-auto object-cover rounded-[16px] w-[416px] md:w-full"
                    src="images/img_unsplashbu8texhspcy.png"
                    alt="unsplashbu8texh"
                  />
                  <Img
                    className="h-[402px] sm:h-auto object-cover rounded-[16px] w-[832px] md:w-full"
                    src="images/img_unsplashhsxip58ypyi.png"
                    alt="unsplashhsxipFiftyEight"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-[402px] sm:h-auto object-cover rounded-[16px] w-[832px] md:w-full"
                    src="images/img_unsplashzhqczjr9fho.png"
                    alt="unsplashzhqczjr"
                  />
                  <Img
                    className="h-[402px] sm:h-auto object-cover rounded-[16px] w-[416px] md:w-full"
                    src="images/img_unsplashhnuhobuj7s4.png"
                    alt="unsplashhnuhobu"
                  />
                </div>
              </div>
              <Button
                className="bg-transparent border border-solid cursor-pointer font-bold min-w-[300px] pink_400_pink_A200_00_border3 text-center text-xl"
                shape="round"
                color="white_A700_0c"
              >
                Explore NFTs Category
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center md:ml-[0] ml-[68px] mt-[130px] w-auto md:w-full">
              <Img
                className="h-12 md:h-auto object-cover w-[69px] sm:w-full"
                src="images/img_image59.png"
                alt="imageFiftyNine"
              />
              <Img
                className="h-11 md:h-auto object-cover w-[152px] sm:w-full"
                src="images/img_image60.png"
                alt="imageSixty"
              />
              <Img
                className="h-16 md:h-auto object-cover w-[162px] sm:w-full"
                src="images/img_image61.png"
                alt="imageSixtyOne"
              />
              <Img
                className="h-16 md:h-auto object-cover w-[162px] sm:w-full"
                src="images/img_image62.png"
                alt="imageSixtyTwo"
              />
              <Img
                className="h-16 md:h-auto object-cover w-[68px] sm:w-full"
                src="images/img_image63.png"
                alt="imageSixtyThree"
              />
              <Img
                className="h-11 md:h-auto object-cover w-[127px] sm:w-full"
                src="images/img_image64.png"
                alt="imageSixtyFour"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start mt-[130px] w-auto md:w-full">
              <div className="flex flex-col md:gap-10 gap-16 items-start justify-center w-[438px] sm:w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-16 md:h-auto object-cover w-[78px] sm:w-full"
                    src="images/img_newspaper.png"
                    alt="newspaper"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[130.00%] max-w-[438px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtAxiformaBlack40"
                    >
                      Trending Crypto Market News
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[438px] md:max-w-full text-white-A700_a2 text-xl"
                      size="txtHelvetica20"
                    >
                      Set a secondary sales fee and add social links, a
                      description, profile and banner images, and a description.
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[208px] text-center text-xl"
                  shape="round"
                  variant="gradient"
                  color="purple_A400_pink_A400"
                >
                  Explore NFTs
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[285px] md:h-auto object-cover rounded-[24px] w-full"
                      src="images/img_unsplashvoexbwnlgq.png"
                      alt="unsplashvoexbwn"
                    />
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-white-A700_a2 text-xl w-full"
                      size="txtHelvetica20"
                    >
                      April 18, 2022
                    </Text>
                    <Text
                      className="leading-[140.00%] max-w-[445px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtAxiformaSemiBold28"
                    >
                      Few Reasons to Sell NFTs on Nico
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[24px] w-full">
                    <Img
                      className="h-[285px] md:h-auto object-cover rounded-[24px] w-full"
                      src="images/img_unsplashhqijon1qhz8.png"
                      alt="unsplashhqijonOne"
                    />
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-white-A700_a2 text-xl w-full"
                      size="txtHelvetica20"
                    >
                      April 18, 2022
                    </Text>
                    <Text
                      className="leading-[140.00%] max-w-[445px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtAxiformaSemiBold28"
                    >
                      Few Reasons to Sell NFTs on Nico
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-12 items-center justify-start md:ml-[0] ml-[282px] mt-[109px] w-auto md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row font-axiforma sm:gap-5 items-center justify-start w-[76%] md:w-full">
                  <Text
                    className="md:text-5xl text-7xl text-center text-white-A700"
                    size="txtAxiformaExtraBold72"
                  >
                    Get in Touch
                  </Text>
                  <Text
                    className="md:text-5xl text-7xl text-center text-shadow-ts"
                    size="txtAxiformaExtraBold72_1"
                  >
                    Get in Touch
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[612px] md:max-w-full text-center text-white-A700_a2 text-xl"
                  size="txtHelvetica20"
                >
                  Set a secondary sales fee and add social links, a description,
                  profile and banner images, and a description.
                </Text>
              </div>
              <Input
                name="frame1000001318"
                placeholder="Enter your email address"
                className="font-axiforma md:text-xl p-0 placeholder:text-white-A700_8e sm:text-lg text-[22px] text-left w-full"
                wrapClassName="w-full"
                type="email"
              ></Input>
              <Button
                className="cursor-pointer font-bold font-helvetica min-w-[186px] text-center text-xl"
                shape="round"
                variant="gradient"
                color="purple_A400_pink_A400"
              >
                Contact Us
              </Button>
            </div>
            <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start mt-[130px] w-auto md:w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between max-w-[945px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-8 items-center justify-start w-auto">
                  <div className="bg-blue_gray-900 flex flex-col items-start justify-start p-4 rounded-[39px] w-[79px]">
                    <div className="bg-gray-900_02 h-[47px] rounded-[23px] w-[47px]"></div>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtHelvetica20WhiteA700"
                    >
                      example@gmail.com
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtHelvetica20WhiteA700"
                    >
                      sample@yahoo.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start w-auto">
                  <div className="bg-blue_gray-900 flex flex-col items-start justify-start p-4 rounded-[39px] w-[79px]">
                    <div className="bg-gray-900_02 h-[47px] rounded-[23px] w-[47px]"></div>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtHelvetica20WhiteA700"
                    >
                      We are on Telegram
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtHelvetica20WhiteA700"
                    >
                      @NicoCryptoChannel
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start w-auto">
                  <div className="bg-blue_gray-900 flex flex-col items-start justify-start p-4 rounded-[39px] w-[79px]">
                    <div className="bg-gray-900_02 h-[47px] rounded-[23px] w-[47px]"></div>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtHelvetica20WhiteA700"
                    >
                      +1 800 123 456 789
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtHelvetica20WhiteA700"
                    >
                      +1 800 123 456 780
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Button
                  className="flex h-[47px] items-center justify-center rounded-[23px] w-[47px]"
                  color="gray_900_03"
                >
                  <Img src="images/img_facebook.svg" alt="facebook" />
                </Button>
                <Button
                  className="flex h-[47px] items-center justify-center rounded-[23px] w-[47px]"
                  color="gray_900_03"
                >
                  <Img src="images/img_link.svg" alt="link" />
                </Button>
                <Button
                  className="flex h-[47px] items-center justify-center rounded-[23px] w-[47px]"
                  color="gray_900_03"
                >
                  <Img src="images/img_trash.svg" alt="trash" />
                </Button>
                <Button
                  className="flex h-[47px] items-center justify-center rounded-[23px] w-[47px]"
                  color="gray_900_03"
                >
                  <Img src="images/img_vector.svg" alt="vector" />
                </Button>
              </div>
              <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                <Line className="bg-white-A700_2b h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-7xl w-full">
                  <Text
                    className="text-center text-white-A700_a2 text-xl w-auto"
                    size="txtHelvetica20"
                  >
                    Copyright © 2022 Nazmul Shanto. All Rights Reserved
                  </Text>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[45px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtHelvetica20WhiteA700"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-white-A700_6d text-xl w-auto"
                      size="txtHelvetica20WhiteA7006d"
                    >
                      All NFTs
                    </Text>
                    <Text
                      className="text-white-A700_6d text-xl w-auto"
                      size="txtHelvetica20WhiteA7006d"
                    >
                      Team
                    </Text>
                    <Text
                      className="text-white-A700_6d text-xl w-auto"
                      size="txtHelvetica20WhiteA7006d"
                    >
                      Terms & Co.
                    </Text>
                    <Text
                      className="text-white-A700_6d text-xl w-auto"
                      size="txtHelvetica20WhiteA7006d"
                    >
                      Contact
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSeventyNinePage;
