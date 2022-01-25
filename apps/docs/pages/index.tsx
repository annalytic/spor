import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

import { SectionCard } from "../features/section-card/SectionCard";
import { SiteBody } from "../features/site-body/SiteBody";

export default function Docs() {
  return (
    <Box>
      <SiteBody />
      <LinkCards />
    </Box>
  );
}

const LinkCards = () => {
  return (
    <SimpleGrid
      columns={{ base: 3, md: 3 }}
      spacing={"40px"}
      maxWidth="container.lg"
      mx="auto"
      mt="-30px"
    >
      <Box>
        <SectionCard
          title={"Getting started"}
          text={"Liten beskrivelse liten beskrivelse liten beskrivelse."}
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.4719 6.12294C30.6796 5.26175 29.3204 5.26176 28.5282 6.12294L6.26409 30.323C5.99537 30.6151 5.92482 31.0385 6.08431 31.4019C6.2438 31.7653 6.60313 32.0001 7.00002 32.0001H13V47.0001C13 48.1046 13.8955 49.0001 15 49.0001H45C46.1046 49.0001 47 48.1046 47 47.0001V32.0001H53C53.3969 32.0001 53.7562 31.7653 53.9157 31.4019C54.0752 31.0385 54.0047 30.6151 53.736 30.323L46.9988 23H47V10C47 9.44772 46.5523 9 46 9H39C38.4477 9 38 9.44772 38 10V13.2187L31.4719 6.12294ZM45 11V20.8274L40 15.3926V11H45ZM30 7.47705L50.7212 30.0001H46C45.4477 30.0001 45 30.4478 45 31.0001V47.0001H15V31.0001C15 30.4478 14.5523 30.0001 14 30.0001H9.27884L30 7.47705ZM10 52C9.44772 52 9 52.4477 9 53C9 53.5523 9.44772 54 10 54H50C50.5523 54 51 53.5523 51 53C51 52.4477 50.5523 52 50 52H10ZM26 33C25.4477 33 25 33.4477 25 34V47H27V35H33V47H35V34C35 33.4477 34.5523 33 34 33H26Z"
                fill="#2B2B2C"
              />
            </svg>
          }
          bgColor={useColorModeValue("alias.lightBlue", "white")}
        />
      </Box>
      <Box>
        <SectionCard
          title={"Components"}
          text={"Liten beskrivelse liten beskrivelse liten beskrivelse."}
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36 12C36 9.79086 37.7909 8 40 8C42.2091 8 44 9.79086 44 12C44 14.2091 42.2091 16 40 16C37.7909 16 36 14.2091 36 12ZM40 6C36.6863 6 34 8.68629 34 12C34 13.9601 34.9399 15.7007 36.3937 16.7957L33.5706 21.7361C32.4759 21.2625 31.2686 21 30 21C27.875 21 25.922 21.7365 24.3823 22.9681L17.7366 16.3224C18.5225 15.4391 19 14.2753 19 13C19 10.2386 16.7614 8 14 8C11.2386 8 9 10.2386 9 13C9 15.7614 11.2386 18 14 18C14.7566 18 15.474 17.8319 16.1169 17.5311L22.9681 24.3823C21.9324 25.6771 21.2468 27.2641 21.0549 29H17.874C17.4299 27.2748 15.8638 26 14 26C11.7909 26 10 27.7909 10 30C10 32.2091 11.7909 34 14 34C15.8638 34 17.4299 32.7252 17.874 31H21.0549C21.3328 33.5134 22.6456 35.7149 24.5578 37.1688L20.3496 42.2186C19.5019 41.7602 18.5313 41.5 17.5 41.5C14.1863 41.5 11.5 44.1863 11.5 47.5C11.5 50.8137 14.1863 53.5 17.5 53.5C20.8137 53.5 23.5 50.8137 23.5 47.5C23.5 45.939 22.9039 44.5172 21.9269 43.4499L26.2973 38.2055C27.4266 38.7159 28.6801 39 30 39C32.125 39 34.078 38.2635 35.6177 37.0319L39.8284 41.2426C39.3049 42.033 39 42.9809 39 44C39 46.7614 41.2386 49 44 49C46.7614 49 49 46.7614 49 44C49 41.2386 46.7614 39 44 39C42.9809 39 42.0331 39.3049 41.2426 39.8284L37.0319 35.6177C38.0676 34.3229 38.7532 32.7358 38.9451 31H45.126C45.5701 32.7252 47.1362 34 49 34C51.2091 34 53 32.2091 53 30C53 27.7909 51.2091 26 49 26C47.1362 26 45.5701 27.2748 45.126 29H38.9451C38.6607 26.4275 37.292 24.1817 35.3062 22.7298L38.1712 17.7162C38.7478 17.9005 39.3623 18 40 18C43.3137 18 46 15.3137 46 12C46 8.68629 43.3137 6 40 6ZM14 10C12.3431 10 11 11.3431 11 13C11 14.6569 12.3431 16 14 16C15.6569 16 17 14.6569 17 13C17 11.3431 15.6569 10 14 10ZM30 23C26.134 23 23 26.134 23 30C23 33.866 26.134 37 30 37C33.866 37 37 33.866 37 30C37 26.134 33.866 23 30 23ZM41 44C41 42.3431 42.3431 41 44 41C45.6569 41 47 42.3431 47 44C47 45.6569 45.6569 47 44 47C42.3431 47 41 45.6569 41 44ZM14 28C12.8954 28 12 28.8954 12 30C12 31.1046 12.8954 32 14 32C15.1046 32 16 31.1046 16 30C16 28.8954 15.1046 28 14 28ZM47 30C47 28.8954 47.8954 28 49 28C50.1046 28 51 28.8954 51 30C51 31.1046 50.1046 32 49 32C47.8954 32 47 31.1046 47 30ZM17.5 43.5C15.2909 43.5 13.5 45.2909 13.5 47.5C13.5 49.7091 15.2909 51.5 17.5 51.5C19.7091 51.5 21.5 49.7091 21.5 47.5C21.5 45.2909 19.7091 43.5 17.5 43.5Z"
                fill="#2B2B2C"
              />
            </svg>
          }
          bgColor={useColorModeValue("alias.champagne", "white")}
        />
      </Box>
      <Box>
        <SectionCard
          title={"Tokens"}
          text={"Liten beskrivelse liten beskrivelse liten beskrivelse."}
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.9492 8.05859C17.799 8.05859 7.94922 17.9083 7.94922 30.0586C7.94922 42.2089 17.799 52.0586 29.9492 52.0586C34.2919 52.0586 38.3383 50.8013 41.7473 48.6309C41.2735 47.8667 41 46.9653 41 46C41 43.2386 43.2386 41 46 41C46.9531 41 47.8439 41.2667 48.6019 41.7295C50.7229 38.3472 51.9492 34.3474 51.9492 30.0586C51.9492 17.9083 42.0995 8.05859 29.9492 8.05859ZM50.0873 43.1194C52.5301 39.3603 53.9492 34.8738 53.9492 30.0586C53.9492 16.8038 43.204 6.05859 29.9492 6.05859C16.6944 6.05859 5.94922 16.8038 5.94922 30.0586C5.94922 43.3134 16.6944 54.0586 29.9492 54.0586C34.8232 54.0586 39.3604 52.6047 43.1473 50.1069C43.9563 50.6699 44.9396 51 46 51C48.7614 51 51 48.7614 51 46C51 44.9274 50.6623 43.9337 50.0873 43.1194ZM30 23C26.134 23 23 26.134 23 30C23 33.866 26.134 37 30 37C33.866 37 37 33.866 37 30C37 26.134 33.866 23 30 23ZM21 30C21 25.0294 25.0294 21 30 21C34.9706 21 39 25.0294 39 30C39 34.9706 34.9706 39 30 39C25.0294 39 21 34.9706 21 30ZM43 46C43 44.3431 44.3431 43 46 43C47.6568 43 49 44.3431 49 46C49 47.6568 47.6568 49 46 49C44.3431 49 43 47.6568 43 46Z"
                fill="#2B2B2C"
              />
            </svg>
          }
          bgColor={useColorModeValue("alias.champagne", "white")}
        />
      </Box>
      <Box>
        <SectionCard
          title={"Profile"}
          text={"Liten beskrivelse liten beskrivelse liten beskrivelse."}
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.3588 7.94447C45.5038 6.08948 42.4963 6.08947 40.6413 7.94446L30 18.5858L19.7071 8.29289C19.3166 7.90237 18.6834 7.90237 18.2929 8.29289L8.29289 18.2929C8.10536 18.4804 8 18.7348 8 19C8 19.2652 8.10536 19.5196 8.29289 19.7071L12.2929 23.7071L16.2929 27.7071L18.5858 30L10.2929 38.2928C10.1455 38.4402 10.0479 38.6299 10.0136 38.8355L8.01362 50.8355C7.96053 51.1541 8.06455 51.4787 8.29291 51.707C8.52127 51.9354 8.84586 52.0394 9.16441 51.9863L21.1644 49.9863C21.37 49.9521 21.5597 49.8544 21.7071 49.707L30 41.4142L32.2929 43.7071L36.2929 47.7071L40.2929 51.7071C40.6834 52.0976 41.3166 52.0976 41.7071 51.7071L51.7071 41.7071C51.8946 41.5196 52 41.2652 52 41C52 40.7348 51.8946 40.4804 51.7071 40.2929L41.4142 30L52.0555 19.3587C53.9105 17.5037 53.9105 14.4962 52.0555 12.6412L47.3588 7.94447ZM38.4142 47L40.7071 44.7071C41.0976 44.3166 41.0976 43.6834 40.7071 43.2929C40.3166 42.9024 39.6834 42.9024 39.2929 43.2929L37 45.5858L34.4142 43L37.7071 39.7071C38.0976 39.3166 38.0976 38.6834 37.7071 38.2929C37.3166 37.9024 36.6834 37.9024 36.2929 38.2929L33 41.5858L30.4142 39L32.7071 36.7071C33.0976 36.3166 33.0976 35.6834 32.7071 35.2929C32.3166 34.9024 31.6834 34.9024 31.2929 35.2929L29 37.5858L26.4142 35L29.7071 31.7071C30.0976 31.3166 30.0976 30.6834 29.7071 30.2929C29.3166 29.9024 28.6834 29.9024 28.2929 30.2929L25 33.5858L22.4142 31L24.7071 28.7071C25.0976 28.3166 25.0976 27.6834 24.7071 27.2929C24.3166 26.9024 23.6834 26.9024 23.2929 27.2929L21 29.5858L18.4142 27L21.7071 23.7071C22.0976 23.3166 22.0976 22.6834 21.7071 22.2929C21.3166 21.9024 20.6834 21.9024 20.2929 22.2929L17 25.5858L14.4142 23L16.7071 20.7071C17.0976 20.3166 17.0976 19.6834 16.7071 19.2929C16.3166 18.9024 15.6834 18.9024 15.2929 19.2929L13 21.5858L10.4142 19L19 10.4142L49.5858 41L41 49.5858L38.4142 47ZM20.2929 31.7071L20 31.4142L13.4141 38H16C16.5523 38 17 38.4477 17 39V43H21C21.5523 43 22 43.4477 22 44V46.5857L28.5858 40L28.2929 39.7071L24.2929 35.7071L20.2929 31.7071ZM40 28.5858L47.5858 21L39 12.4142L31.4142 20L40 28.5858ZM50.6413 17.9445L49 19.5858L40.4142 11L42.0555 9.35868C43.1294 8.28474 44.8706 8.28474 45.9446 9.35868L50.6413 14.0554C51.7152 15.1293 51.7152 16.8705 50.6413 17.9445ZM20 48.1528V45H16C15.4477 45 15 44.5523 15 44V40H11.8471L10.2166 49.7834L20 48.1528Z"
                fill="#2B2B2C"
              />
            </svg>
          }
          bgColor={useColorModeValue("alias.seaMist", "white")}
        />
      </Box>
      <Box>
        <SectionCard
          title={"Icons"}
          text={"Liten beskrivelse liten beskrivelse liten beskrivelse."}
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43 6.5C43.4019 6.5 43.7648 6.74062 43.9212 7.11085L46.139 12.3609L51.3891 14.5788C51.7594 14.7352 52 15.0981 52 15.5C52 15.9019 51.7594 16.2648 51.3891 16.4212L46.139 18.6391L43.9212 23.8891C43.7648 24.2594 43.4019 24.5 43 24.5C42.5981 24.5 42.2352 24.2594 42.0788 23.8891L39.861 18.6391L34.6109 16.4212C34.2406 16.2648 34 15.9019 34 15.5C34 15.0981 34.2406 14.7352 34.6109 14.5788L39.861 12.3609L42.0788 7.11085C42.2352 6.74062 42.5981 6.5 43 6.5ZM43 10.0697L41.5453 13.5133C41.444 13.7531 41.2531 13.944 41.0133 14.0453L37.5697 15.5L41.0133 16.9547C41.2531 17.056 41.444 17.2469 41.5453 17.4867L43 20.9303L44.4547 17.4867C44.556 17.2469 44.7469 17.056 44.9867 16.9547L48.4303 15.5L44.9867 14.0453C44.7469 13.944 44.556 13.7531 44.4547 13.5133L43 10.0697ZM24 9C24.4019 9 24.7648 9.24062 24.9212 9.61085L30.7029 23.2971L44.3891 29.0788C44.7594 29.2352 45 29.5981 45 30C45 30.4019 44.7594 30.7648 44.3891 30.9212L30.7029 36.7029L24.9212 50.3891C24.7648 50.7594 24.4019 51 24 51C23.5981 51 23.2352 50.7594 23.0788 50.3891L17.2971 36.7029L3.61085 30.9212C3.24062 30.7648 3 30.4019 3 30C3 29.5981 3.24062 29.2352 3.61085 29.0788L17.2971 23.2971L23.0788 9.61085C23.2352 9.24062 23.5981 9 24 9ZM24 12.5697L18.9815 24.4494C18.8802 24.6893 18.6893 24.8802 18.4494 24.9815L6.56973 30L18.4494 35.0185C18.6893 35.1198 18.8802 35.3107 18.9815 35.5506L24 47.4303L29.0185 35.5506C29.1198 35.3107 29.3107 35.1198 29.5506 35.0185L41.4303 30L29.5506 24.9815C29.3107 24.8802 29.1198 24.6893 29.0185 24.4494L24 12.5697ZM43.9212 36.6109C43.7648 36.2406 43.4019 36 43 36C42.5981 36 42.2352 36.2406 42.0788 36.6109L39.861 41.861L34.6109 44.0788C34.2406 44.2352 34 44.5981 34 45C34 45.4019 34.2406 45.7648 34.6109 45.9212L39.861 48.139L42.0788 53.3891C42.2352 53.7594 42.5981 54 43 54C43.4019 54 43.7648 53.7594 43.9212 53.3891L46.139 48.139L51.3891 45.9212C51.7594 45.7648 52 45.4019 52 45C52 44.5981 51.7594 44.2352 51.3891 44.0788L46.139 41.861L43.9212 36.6109ZM41.5453 43.0133L43 39.5697L44.4547 43.0133C44.556 43.2531 44.7469 43.444 44.9867 43.5453L48.4303 45L44.9867 46.4547C44.7469 46.556 44.556 46.7469 44.4547 46.9867L43 50.4303L41.5453 46.9867C41.444 46.7469 41.2531 46.556 41.0133 46.4547L37.5697 45L41.0133 43.5453C41.2531 43.444 41.444 43.2531 41.5453 43.0133Z"
                fill="#2B2B2C"
              />
            </svg>
          }
          bgColor={useColorModeValue("alias.primrose", "white")}
        />
      </Box>
      <Box>
        <SectionCard
          title={"API"}
          text={"Liten beskrivelse liten beskrivelse liten beskrivelse."}
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.6987 4.41801L36.7508 10.1876L36.9039 10.2369C37.6639 10.5002 38.4022 10.8042 39.1154 11.1479L39.2268 11.2076L44.7509 8.58186L45.721 9.32182C47.5894 10.7471 49.2553 12.4118 50.6715 14.2728L51.4097 15.2428L48.7828 20.7556L49.1766 21.5946C49.3886 22.0815 49.5826 22.579 49.7584 23.0863L49.8028 23.2396L55.5738 25.2918L55.7378 26.4988C55.9105 27.7697 56 28.8901 56 30C56 31.1099 55.9105 32.2303 55.7378 33.5012L55.5738 34.7082L49.8028 36.7596L49.7584 36.9137C49.4946 37.6746 49.1901 38.4135 48.8452 39.1277L48.7828 39.2436L51.4097 44.7572L50.6715 45.7272C49.2553 47.5882 47.5894 49.2529 45.721 50.6782L44.7509 51.4181L39.2308 48.7916L39.1154 48.8521C38.4022 49.1958 37.6639 49.4998 36.9039 49.7631L36.7508 49.8076L34.7001 55.5732L33.4942 55.7377C32.2292 55.9102 31.1073 56 30 56C28.8868 56 27.7629 55.9105 26.4878 55.7379L25.28 55.5745L23.2268 49.8036L22.3318 49.4831C21.8371 49.2897 21.3519 49.0783 20.877 48.8489L20.7548 48.7876L15.2418 51.409L14.2728 50.6715C12.4119 49.2554 10.7473 47.5897 9.31824 45.7175L8.57765 44.7473L11.2028 39.2236L11.1454 39.1128C10.803 38.402 10.4998 37.6668 10.2371 36.9112L10.1908 36.7636L4.41738 34.7105L4.25722 33.4979C4.0878 32.2152 4 31.1016 4 30C4 28.8957 4.08749 27.7872 4.25722 26.5021L4.41738 25.2895L10.1868 23.2356L10.5133 22.3402C10.7063 21.8458 10.9171 21.3611 11.1454 20.8872L11.2028 20.7716L8.57831 15.254L9.31688 14.2842C10.7447 12.4094 12.4094 10.7426 14.2728 9.32446L15.2425 8.58652L20.7588 11.2076L21.597 10.8205C22.0819 10.6091 22.5768 10.4157 23.0809 10.2405L23.2268 10.1916L25.28 4.42552L26.4878 4.26207C27.7629 4.0895 28.8868 4 30 4C31.0983 4 32.2084 4.08785 33.4869 4.25735L34.6987 4.41801ZM35.1974 11.7883L36.2692 12.1337C36.9374 12.366 37.5849 12.6323 38.2093 12.9314L39.1726 13.4478L44.508 10.912C46.235 12.2293 47.7731 13.7667 49.0796 15.4835L46.5704 20.7491L47.3538 22.4182C47.5342 22.8342 47.7003 23.2595 47.8521 23.6936L48.1669 24.7805L53.756 26.768C53.9198 27.9735 54 29.0013 54 30C54 30.9986 53.9198 32.0264 53.756 33.2318L48.1652 35.2191L47.8517 36.3076C47.6215 36.9659 47.3583 37.6038 47.0627 38.2195L46.5412 39.1886L49.0796 44.5165C47.7732 46.2331 46.2351 47.7705 44.5082 49.0878L39.1873 46.556L38.2174 47.0647C37.5987 47.3615 36.9573 47.626 36.2957 47.8571L35.2094 48.173L33.2237 53.756C32.0248 53.9195 30.9958 54 30 54C28.9976 54 27.9658 53.9197 26.7558 53.756L24.7934 48.2403L23.0338 47.6101C22.6003 47.4399 22.1756 47.2546 21.76 47.0544L20.7786 46.5617L15.4834 49.0795C13.767 47.7732 12.2293 46.235 10.9078 44.5037L13.4354 39.1852L12.9349 38.2192C12.6355 37.5951 12.3687 36.9485 12.136 36.2826L11.8007 35.2134L6.23999 33.236C6.07868 32.0145 6 30.9916 6 30C6 29.0058 6.07841 27.9875 6.24006 26.7636L11.7436 24.8043L12.3843 23.0471C12.5554 22.6105 12.7414 22.1831 12.9422 21.7657L13.4265 20.7905L10.9081 15.4959C12.2279 13.7628 13.7654 12.2239 15.4844 10.9157L20.7467 13.4162L22.4154 12.6455C22.8437 12.4594 23.2812 12.2886 23.7274 12.1332L24.7847 11.7787L26.756 6.244C27.9659 6.08025 28.9976 6 30 6C30.9879 6 32.0071 6.07866 33.224 6.24L35.1974 11.7883ZM38 30C38 34.4183 34.4183 38 30 38C25.5817 38 22 34.4183 22 30C22 25.5817 25.5817 22 30 22C34.4183 22 38 25.5817 38 30ZM40 30C40 35.5228 35.5228 40 30 40C24.4772 40 20 35.5228 20 30C20 24.4772 24.4772 20 30 20C35.5228 20 40 24.4772 40 30Z"
                fill="#2B2B2C"
              />
            </svg>
          }
          bgColor={useColorModeValue("alias.silver", "white")}
        />
      </Box>
    </SimpleGrid>
  );
};
