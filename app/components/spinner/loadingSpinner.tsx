// import { inject, observer } from "mobx-react";
// import { useEffect } from "react";
// import { SpinnerProps } from "src/viewModels/spinner/spinner.viewModel";
// import styled from "styled-components";

// function LoadingSpinner({ spinnerViewModel }: SpinnerProps) {
//   useEffect(() => {
//     // spinnerViewModel.handleSpinner("plus");
//   }, []);

//   return (
//     <Container className={spinnerViewModel.spinnerCount > 0 ? "active" : ""}>
//       <div className="background" />
//       <Spinner
//         viewBox="0 0 64 64"
//         width="64px"
//         height="64px"
//         xmlns="http://www.w3.org/2000/svg"
//         className={spinnerViewModel.spinnerCount > 0 ? "active" : ""}
//       >
//         <defs>
//           <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#000" />
//             <stop offset="100%" stopColor="#fff" />
//           </linearGradient>
//           <mask id="grad-mask">
//             <rect x="0" y="0" width="64" height="64" fill="url(#grad)" />
//           </mask>
//         </defs>
//         <circle
//           className="ring"
//           cx="32"
//           cy="32"
//           r="26"
//           fill="none"
//           stroke="hsl(223,90%,55%)"
//           strokeWidth="12"
//           strokeDasharray="169.65 169.65"
//           strokeDashoffset="-127.24"
//           strokeLinecap="round"
//           transform="rotate(135)"
//         />
//         <g fill="hsl(223,90%,55%)">
//           <circle
//             className="first_ball"
//             cx="32"
//             cy="45"
//             r="6"
//             transform="rotate(14)"
//           />
//           <circle
//             className="second_ball"
//             cx="32"
//             cy="48"
//             r="3"
//             transform="rotate(-21)"
//           />
//         </g>
//         <g mask="url(#grad-mask)">
//           <circle
//             className="ring"
//             cx="32"
//             cy="32"
//             r="26"
//             fill="none"
//             stroke="hsl(283,90%,55%)"
//             strokeWidth="12"
//             strokeDasharray="169.65 169.65"
//             strokeDashoffset="-127.24"
//             strokeLinecap="round"
//             transform="rotate(135)"
//           />
//           <g fill="hsl(283,90%,55%)">
//             <circle
//               className="first_ball"
//               cx="32"
//               cy="45"
//               r="6"
//               transform="rotate(14)"
//             />
//             <circle
//               className="second_ball"
//               cx="32"
//               cy="48"
//               r="3"
//               transform="rotate(-21)"
//             />
//           </g>
//         </g>
//       </Spinner>
//     </Container>
//   );
// }
// export default inject("spinnerViewModel")(observer(LoadingSpinner));

// const Container = styled.div`
//   z-index: 10;
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   pointer-events: none;

//   & > div.background {
//     width: 100%;
//     height: 100%;
//     background: #000;
//     opacity: 0;
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }

//   &.active {
//     pointer-events: auto;

//     & > div.background {
//       opacity: 0.2;
//     }
//   }
// `;

// const Spinner = styled.svg`
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, 0%);
//   display: block;
//   width: 8em;
//   height: 8em;
//   opacity: 0;
//   transition: all 0.3s ease-in-out;

//   &.active {
//     transform: translate(-50%, -50%);
//     opacity: 1;
//   }

//   & .ring,
//   & .first_ball,
//   & .second_ball {
//     animation-duration: 2s;
//     animation-timing-function: ease-in-out;
//     animation-iteration-count: infinite;
//     transform-origin: 32px 32px;
//   }
//   & .ring {
//     animation-name: ring;
//   }
//   & .first_ball {
//     animation-name: first_ball_animation;
//   }
//   & .second_ball {
//     animation-name: second_ball_animation;
//   }

//   /* Animation */
//   @keyframes ring {
//     from {
//       animation-timing-function: ease-in-out;
//       stroke-dashoffset: -122.52;
//       transform: rotate(135deg);
//     }
//     15% {
//       animation-timing-function: ease-in;
//       stroke-dashoffset: -122.52;
//       transform: rotate(90deg);
//     }
//     35% {
//       animation-timing-function: ease-out;
//       stroke-dashoffset: -65.34;
//       transform: rotate(297.5deg);
//     }
//     55% {
//       animation-timing-function: ease-in-out;
//       stroke-dashoffset: -122.52;
//       transform: rotate(505deg);
//     }
//     70% {
//       animation-timing-function: ease-in-out;
//       stroke-dashoffset: -122.52;
//       transform: rotate(490deg);
//     }
//     85%,
//     to {
//       stroke-dashoffset: -122.52;
//       transform: rotate(497.5deg);
//     }
//   }
//   @keyframes first_ball_animation {
//     from {
//       transform: rotate(14deg);
//     }
//     20% {
//       transform: rotate(-7deg);
//     }
//     60% {
//       transform: rotate(399deg);
//     }
//     75% {
//       transform: rotate(361deg);
//     }
//     90%,
//     to {
//       transform: rotate(374deg);
//     }
//   }
//   @keyframes second_ball_animation {
//     from {
//       transform: rotate(-21deg);
//     }
//     25% {
//       transform: rotate(-47deg);
//     }
//     60% {
//       transform: rotate(364deg);
//     }
//     75% {
//       transform: rotate(326deg);
//     }
//     90%,
//     to {
//       transform: rotate(339deg);
//     }
//   }
// `;
