import React from "react";

import "./Cloud.scss";

const cloud = (props) => {
  let cloudClasses = `intro__cloud intro__cloud--color ${props.size} ${props.pos}`;

  const cloudGradient = {
    fillUrl: `url(#paint10_linear)`, //4
    gradientComponent: (
      <defs>
        <linearGradient
          id="paint4_linear"
          x1="263.523"
          y1="162.91"
          x2="259.547"
          y2="426.858"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A3D4F7" />
          <stop offset="1" stopColor="#83D4ED" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="266.74"
          y1="47.535"
          x2="260.482"
          y2="453.442"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A3D4F7" />
          <stop offset="1" stopColor="#83D4ED" />
        </linearGradient>
      </defs>
    ),
  };

  // Cloud Dictionary:

  const getCloud = (cloudNum) => {
    const clouds = {
      cloud1: (
        <svg
          className={cloudClasses}
          width="342"
          height="195"
          viewBox="0 0 342 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M341.005 127.21C341.005 159.73 317.668 186.91 286.861 192.89C282.721 193.7 278.452 194.12 274.082 194.12C254.574 194.12 236.276 185.68 223.648 171.19C206.21 186.03 184.323 194.12 161.155 194.12C145.267 194.12 129.669 190.21 115.73 182.78C103.771 190.21 90.103 194.12 75.905 194.12C34.19 194.12 0.254028 160.19 0.254028 118.48C0.254028 76.78 34.19 42.85 75.905 42.85C77.705 42.85 79.545 42.92 81.394 43.06C87.343 34.34 94.532 26.8 102.662 20.61C119.17 7.98995 139.548 0.959961 161.155 0.959961C201.81 0.959961 237.936 26.53 251.784 64.1C258.913 61.57 266.382 60.2899 274.081 60.2899C310.978 60.2899 341.005 90.3099 341.005 127.21V127.21Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud2: (
        <svg
          className={cloudClasses}
          width="512"
          height="326"
          viewBox="0 0 512 326"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M426.751 258.25C426.751 290.77 403.414 317.95 372.607 323.93C368.467 324.74 364.198 325.16 359.828 325.16C340.32 325.16 322.022 316.72 309.394 302.23C291.956 317.07 270.069 325.16 246.901 325.16C231.013 325.16 215.415 321.25 201.476 313.82C189.517 321.25 175.849 325.16 161.651 325.16C119.936 325.16 86 291.23 86 249.52C86 207.82 119.936 173.89 161.651 173.89C163.451 173.89 165.291 173.96 167.14 174.1C173.089 165.38 180.278 157.84 188.408 151.65C204.916 139.03 225.294 132 246.901 132C287.556 132 323.682 157.57 337.53 195.14C344.659 192.61 352.128 191.33 359.827 191.33C396.724 191.33 426.751 221.35 426.751 258.25Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          <path
            d="M512 212.6C512 259.24 474.19 297.05 427.55 297.05H256H84.45C37.81 297.05 0 259.24 0 212.6C0 175.7 23.67 144.35 56.66 132.86C53.95 91.36 86.86 56.87 127.76 56.87C138.78 56.87 149.21 59.38 158.52 63.84C174.92 26.26 212.39 0 256 0C299.61 0 337.08 26.26 353.48 63.84C362.79 59.38 373.22 56.87 384.24 56.87C425.23 56.87 458.05 91.45 455.35 132.86C488.33 144.35 512 175.7 512 212.6Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud3: (
        <svg
          className={cloudClasses}
          width="471"
          height="321"
          viewBox="0 0 471 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M470.498 215.211C470.509 225.22 468.546 235.132 464.721 244.381C460.896 253.63 455.284 262.034 448.207 269.111C441.13 276.188 432.726 281.8 423.477 285.625C414.228 289.45 404.316 291.413 394.307 291.402C377.023 291.349 360.287 285.338 346.919 274.382C343.56 286.027 336.961 296.477 327.89 304.515C318.82 312.553 307.651 317.848 295.687 319.783C283.723 321.718 271.455 320.212 260.313 315.442C249.172 310.672 239.615 302.834 232.757 292.841C226.636 296.477 220.023 299.21 213.121 300.957C207.366 302.546 201.421 303.34 195.45 303.317C183.475 303.295 171.68 300.392 161.062 294.853C150.444 289.313 141.315 281.3 134.446 271.49C123.972 279.63 111.706 285.152 98.6675 287.596C85.6291 290.04 72.1956 289.335 59.4845 285.541C46.7733 281.746 35.1519 274.971 25.587 265.78C16.0222 256.588 8.79026 245.245 4.49293 232.695C0.195605 220.145 -1.04293 206.75 0.88034 193.625C2.80361 180.5 7.8331 168.023 15.5504 157.234C23.2678 146.444 33.4499 137.653 45.2498 131.592C57.0496 125.531 70.1262 122.375 83.3916 122.387C86.5328 122.387 89.5426 123.044 92.5523 123.3C96.7254 103.4 107.617 85.54 123.399 72.7188C139.18 59.8975 158.892 52.895 179.226 52.8864C190.076 52.9544 200.819 55.0402 210.907 59.0373C220.847 37.8864 237.702 20.7568 258.689 10.4755C279.676 0.194303 303.541 -2.62399 326.346 2.48581C349.151 7.59562 369.531 20.3281 384.125 38.5818C398.718 56.8355 406.652 79.5193 406.616 102.889C406.494 115.478 404.099 127.941 399.545 139.677C418.733 140.955 436.724 149.46 449.891 163.476C463.058 177.493 470.422 195.98 470.498 215.211Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud4: (
        <svg
          className={cloudClasses}
          width="464"
          height="257"
          viewBox="0 0 464 257"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M392 72.0152C386.688 71.339 381.312 71.339 376 72.0152C373.024 56.8915 366.181 42.7965 356.138 31.1037C346.095 19.4109 333.194 10.5191 318.692 5.29454C304.191 0.0700059 288.583 -1.30903 273.391 1.2918C258.198 3.89263 243.938 10.3846 232 20.1352C216.251 7.10285 196.442 -0.0143064 176 0.0152339C153.923 -0.399605 132.527 7.66311 116.214 22.5443C99.9015 37.4255 89.913 57.9932 88.304 80.0152C82.8864 79.407 77.4176 79.407 72 80.0152C52.9044 80.0152 34.5909 87.6009 21.0883 101.104C7.58569 114.606 0 132.92 0 152.015C0 171.111 7.58569 189.424 21.0883 202.927C34.5909 216.43 52.9044 224.015 72 224.015C83.0555 223.26 93.8896 220.551 104 216.015C118.136 238.639 139.36 256.015 168 256.015C180.435 256.015 192.697 253.108 203.809 247.527C214.921 241.946 224.575 233.845 232 223.871C239.425 233.845 249.079 241.946 260.191 247.527C271.303 253.108 283.565 256.015 296 256.015C327.36 256.015 354.88 234.287 368 208.015C375.477 212.05 383.597 214.757 392 216.015C411.096 216.015 429.409 208.43 442.912 194.927C456.414 181.424 464 163.111 464 144.015C464 124.92 456.414 106.606 442.912 93.1035C429.409 79.6009 411.096 72.0152 392 72.0152Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud5: (
        <svg
          className={cloudClasses}
          width="448"
          height="304"
          viewBox="0 0 448 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M407.798 122.551C405.038 81.4636 370.961 48.6994 329.432 47.9574C288.419 -19.378 188.856 -14.9881 154.158 55.9752C118.895 54.9773 86.481 77.5227 75.6522 112.06C33.5512 114.323 0 149.288 0 191.942C0 247.997 56.4397 286.578 108.412 266.739C133.561 306.551 187.043 315.684 223.995 287.932C260.909 315.655 314.401 306.594 339.577 266.739C391.523 286.568 447.99 248.028 447.99 191.942C447.989 162.976 432.711 136.811 407.798 122.551V122.551Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud6: (
        <svg
          className={cloudClasses}
          width="417"
          height="241"
          viewBox="0 0 417 241"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M353.816 86.7942C352.73 86.7942 351.824 87.3616 350.744 87.4169C347.509 79.0835 341.889 71.8888 334.586 66.7326C327.284 61.5763 318.623 58.6872 309.688 58.4266C307.568 44.6887 301.344 31.9124 291.834 21.7742C282.324 11.6361 269.971 4.60961 256.397 1.61681C242.822 -1.37598 228.66 -0.195304 215.768 5.00391C202.877 10.2031 191.858 19.178 184.158 30.751C174.291 25.6539 163.335 23.0249 152.23 23.0892C141.124 23.1535 130.2 25.9093 120.393 31.1203C110.586 36.3313 102.188 43.8422 95.9197 53.0096C89.6512 62.1769 85.6986 72.7273 84.4006 83.7568C80.1569 82.4553 75.7954 81.5747 71.3792 81.1276C59.621 81.0824 48.0351 83.9538 37.6589 89.4846C27.2827 95.0155 18.44 103.033 11.9225 112.82C5.40512 122.607 1.41639 133.857 0.3135 145.563C-0.789391 157.27 1.02798 169.067 5.60289 179.899C10.1778 190.73 17.3675 200.259 26.5281 207.63C35.6888 215.002 46.5345 219.986 58.0942 222.138C69.6539 224.29 81.5668 223.541 92.7663 219.959C103.966 216.377 114.102 210.074 122.268 201.614C127.19 207.449 133.344 212.121 140.288 215.293C147.231 218.466 154.792 220.061 162.425 219.963C170.058 219.865 177.575 218.077 184.435 214.727C191.295 211.377 197.327 206.549 202.098 200.59C206.261 212.492 214.065 222.781 224.405 229.998C234.745 237.215 247.095 240.992 259.702 240.795C272.31 240.597 284.535 236.435 294.644 228.897C304.752 221.36 312.231 210.831 316.018 198.805C326.702 207.548 340.014 212.449 353.816 212.719C370.515 212.719 386.53 206.085 398.337 194.277C410.145 182.47 416.779 166.455 416.779 149.756C416.779 133.058 410.145 117.043 398.337 105.235C386.53 93.4277 370.515 86.7942 353.816 86.7942Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud7: (
        <svg
          className={cloudClasses}
          width="469"
          height="321"
          viewBox="0 0 469 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M409.168 136.172C417.914 84.3354 382.983 35.2248 331.146 26.4777C325.695 25.5581 320.174 25.1152 314.646 25.1539C295.557 25.1225 276.895 30.8042 261.064 41.4689C224.81 -5.27267 157.531 -13.7748 110.789 22.4759C79.7209 46.5726 64.352 85.7571 70.7542 124.552C19.6945 138.389 -10.4786 190.998 3.35892 242.058C17.1964 293.118 69.8056 323.291 120.865 309.453C133.42 306.05 145.153 300.126 155.342 292.041C192.408 329.785 253.054 330.334 290.797 293.267C293.491 290.623 296.025 287.821 298.388 284.876C331.577 326.073 391.876 332.564 433.071 299.376C474.268 266.187 480.759 205.888 447.571 164.693C437.438 152.116 424.288 142.303 409.346 136.171H409.165V136.172H409.168Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud9: (
        <svg
          className={cloudClasses}
          width="540"
          height="304"
          viewBox="0 0 540 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M283.011 0.275696C279.888 0.537018 272.923 1.66937 269.082 2.62756C250.551 7.0264 232.738 17.9147 219.864 32.6356C218.091 34.6826 216.529 36.3376 216.361 36.3376C216.234 36.3376 213.364 34.9003 209.987 33.2018C196.944 26.5817 185.674 23.7072 171.111 23.1846C144.603 22.27 119.445 32.5049 100.408 52.0167C88.4627 64.2551 79.5563 80.3697 75.5041 97.0069C74.7021 100.273 73.9845 102.974 73.9001 103.061C73.8579 103.148 71.7896 103.758 69.3414 104.498C53.3858 109.115 38.6965 118.217 26.7931 130.891C12.737 145.83 3.95724 164.122 0.791448 185.071C-0.263816 192.083 -0.263816 206.935 0.791448 213.598C4.37934 236.159 13.9611 255.366 29.1569 270.435C47.4341 288.553 70.3544 298.048 95.5963 298.048C107.246 298.048 117.757 296.218 128.098 292.429C132.826 290.687 142.492 285.679 147.346 282.499L151.61 279.668L156.633 280.931C171.786 284.764 188.333 284.633 203.233 280.67C205.386 280.104 205.977 280.06 206.568 280.539C206.99 280.844 209.311 282.63 211.717 284.503C224.423 294.346 239.576 300.704 256.207 303.187C261.906 304.014 276.215 303.884 282.125 302.969C299.009 300.225 313.318 293.954 326.91 283.327L331.3 279.886L333.031 280.888C333.959 281.41 336.45 282.804 338.56 283.98C362.578 297.264 392.379 298.875 418.043 288.335C420.449 287.334 423.15 286.114 424.036 285.679C425.64 284.807 425.767 284.807 429.777 285.548C435.644 286.637 453.246 286.637 459.24 285.548C486.424 280.626 509.302 265.383 524.244 242.169C541.466 215.34 544.843 180.803 533.024 150.882C523.105 125.708 503.477 105.718 478.91 95.831C469.075 91.8677 456.75 89.2545 447.97 89.2545H444.551L441.554 85.9009C439.908 84.0717 436.489 80.7181 433.914 78.4533C418.676 64.9955 399.85 56.851 379.673 55.0654L376.465 54.7605L375.114 52.0167C367.137 36.2069 352.447 20.9634 336.534 11.9915C320.621 3.06308 301.288 -1.16156 283.011 0.275696Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
      cloud10: (
        <svg
          className={cloudClasses}
          width="427"
          height="268"
          viewBox="0 0 427 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M213.132 267.595C196.044 267.595 179.321 261.694 166.046 250.978C159.181 245.437 153.37 238.727 148.86 231.243C139.126 237.183 127.826 240.465 116.193 240.465C88.244 240.465 64.171 221.871 56.259 196.144C43.359 194.808 31.059 189.495 21.176 180.765C7.719 168.878 0 151.759 0 133.797C0 101.34 24.797 74.567 56.439 71.422C59.689 61.172 65.557 51.866 73.604 44.411C85.222 33.647 100.347 27.72 116.193 27.72C127.717 27.72 138.924 30.946 148.602 36.787C153.098 29.21 158.924 22.411 165.83 16.794C179.144 5.96401 195.944 0 213.133 0C230.322 0 247.122 5.96401 260.436 16.794C267.342 22.411 273.167 29.211 277.664 36.787C287.342 30.947 298.549 27.72 310.073 27.72C325.919 27.72 341.044 33.648 352.662 44.411C360.712 51.869 366.581 61.177 369.83 71.432C382.786 72.737 395.143 78.052 405.069 86.811C418.541 98.699 426.267 115.825 426.267 133.797C426.267 151.759 418.548 168.878 405.09 180.765C395.208 189.494 382.907 194.807 370.007 196.143C362.095 221.87 338.021 240.464 310.073 240.464C298.44 240.464 287.139 237.181 277.406 231.242C272.896 238.726 267.085 245.436 260.22 250.977C246.943 261.693 230.221 267.595 213.132 267.595Z"
            fill={`${cloudGradient.fillUrl}`}
          />
          {cloudGradient.gradientComponent}
        </svg>
      ),
    };
    return clouds["cloud" + cloudNum];
  };

  return <React.Fragment>{getCloud(props.cloudID)}</React.Fragment>;
};

export default cloud;
