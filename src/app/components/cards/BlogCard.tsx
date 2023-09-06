// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography
//   } from "@material-tailwind/react";
   
//   export default function BlogCard({ Img, textCard, titleCard }) {
//     return (
//       <Card className="max-w-[24rem] overflow-hidden">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="m-0 rounded-none"
//         >
//           {/* <div>
//             { Img }
//           </div> */}
//           {/* <img
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
//           alt="ui/ux review check"
//         /> */}

//                 <img
//           src={Img}
//           alt={titleCard} // Use the title as alt text for the image
//         />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h4" color="blue-gray">
//             { titleCard }
//           </Typography>
//           <Typography variant="lead" color="gray" className="mt-3 font-normal">
//             { textCard}
//           </Typography>
//         </CardBody>
//         <CardFooter className="flex items-center justify-between">
//           <div className="flex items-center -space-x-3">
//           </div>
//         </CardFooter>
//       </Card>
//     );
//   }