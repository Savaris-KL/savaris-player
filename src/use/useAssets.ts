import logo from '@/assets/logo.png'

export function useAssets () {
  const assets = {
    logo
  }

  const svgs = {
    iconPlaylist:
      'M960 0l64 0 0 736c0 88.352-100.288 160-224 160s-224-71.648-224-160c0-88.352 100.288-160 224-160 62.688 0 119.328 18.4 160 48.032l0-368.032-512 113.792 0 494.208c0 88.352-100.288 160-224 160s-224-71.648-224-160c0-88.352 100.288-160 224-160 62.688 0 119.328 18.4 160 48.032l0-624.032 576-128z',
    iconCutin:
      'M349.25 723.45c-23.65 14.45-53.22 14.95-77.35 1.32s-39.06-39.28-39.07-67.1V392.9c0-27.68 14.78-53.23 38.71-66.92a76.315 76.315 0 0 1 77.03 0.71l219.14 130.8c23.12 13.8 37.35 38.78 37.49 65.81 0.13 27.03-13.84 52.15-36.83 66.18L349.25 723.45zM512.1 522.08c0-9.63-8.5-13.29-11.4-15.17l-146.89-92.55c-2.96-1.92-9.72-8.97-19.75-3.15s-7.97 16.74-7.97 20.5v192.51c0 3.79-0.64 12.44 7.97 16.18s16.79-2.28 19.75-4.25l146.89-97.28c2.87-1.93 11.4-7.17 11.4-16.79z m465.45-510.2c25.7 0 46.54 18.09 46.55 40.4v921.14c0 22.31-20.84 40.4-46.55 40.4s-46.54-18.09-46.55-40.4V52.28c0.01-22.31 20.85-40.4 46.55-40.4z m-309.37 104.4c-3.34 0-6.67 0.24-9.97 0.72L157.5 189.23c-34.35 4.96-59.85 34.38-59.85 69.08V774.4c0 35.05 26.01 64.67 60.78 69.21l500.71 65.31c38.24 4.99 73.28-21.95 78.27-60.17 0.39-2.99 0.59-6.01 0.59-9.03V186.07c0-38.55-31.26-69.79-69.82-69.79z m101.2-106.15c38.56 0 69.82 31.25 69.82 69.79v864.41c0 2.9-0.18 5.8-0.54 8.67-4.79 38.25-39.69 65.37-77.95 60.58L61.24 925.99C26.31 921.62 0.1 891.93 0.1 856.74V176.78c0-34.84 25.71-64.35 60.24-69.13L759.8 10.79c3.18-0.44 6.38-0.66 9.58-0.66z',
    iconScroll:
      'M740.894 445.741l-427.67-427.67c-24.095-24.095-60.236-24.095-84.33 0-24.094 24.094-24.094 60.235 0 84.329L614.4 487.906 228.894 873.412c-24.094 24.094-24.094 60.235 0 84.33 24.094 24.093 60.235 24.093 84.33 0l427.67-427.671c12.047-12.047 18.07-30.118 18.07-42.165 0-18.07-6.023-30.118-18.07-42.165z',
    iconSchedule:
      'M164.096 0h695.808c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56v695.872c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H164.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384C5.952 937.6 0 916.928 0 859.968V164.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448C86.4 5.952 107.072 0 164.032 0zM704 736a32 32 0 0 1 32-32h77.952c28.544 0 38.848-2.944 49.28-8.576a58.176 58.176 0 0 0 24.192-24.192c5.632-10.432 8.576-20.736 8.576-49.28V210.048c0-28.544-2.944-38.848-8.576-49.28a58.176 58.176 0 0 0-24.192-24.192c-10.432-5.632-20.736-8.576-49.28-8.576H210.048c-28.544 0-38.848 2.944-49.28 8.576a58.176 58.176 0 0 0-24.192 24.192c-5.632 10.432-8.576 20.736-8.576 49.28v411.904c0 28.544 2.944 38.848 8.576 49.28 5.568 10.432 13.76 18.624 24.192 24.192 10.432 5.632 20.736 8.576 49.28 8.576H288a32 32 0 0 1 32 32v77.952c0 28.544 2.944 38.848 8.576 49.28 5.568 10.432 13.76 18.624 24.192 24.192 10.432 5.632 20.736 8.576 49.28 8.576h219.904c28.544 0 38.848-2.944 49.28-8.576a58.176 58.176 0 0 0 24.192-24.192c5.632-10.432 8.576-20.736 8.576-49.28V736zM288 256h448a32 32 0 1 1 0 64h-448a32 32 0 0 1 0-64z m0 192h448a32 32 0 1 1 0 64h-448a32 32 0 0 1 0-64z',
    iconSongsLib:
      'M64 139.776v528.384c0 20.48 16.384 36.864 36.864 36.864h821.76c20.48 0 36.864-16.384 36.864-36.864V139.776c0-20.48-16.384-36.864-36.864-36.864H100.864c-20.48 0-36.864 16.896-36.864 36.864z m783.36 485.376H176.128c-20.48 0-36.864-16.384-36.864-36.864V215.04c0-20.48 16.384-36.864 36.864-36.864h671.232c20.48 0 36.864 16.384 36.864 36.864v373.248c0 20.48-16.384 36.864-36.864 36.864z m-259.072 186.368c0-20.48-16.384-36.864-36.864-36.864H473.088c-20.48 0-36.864 16.384-36.864 36.864s-16.384 36.864-36.864 36.864H100.864c-20.48 0-36.864 16.384-36.864 36.864v1.024c0 20.48 16.384 36.864 36.864 36.864h821.76c20.48 0 36.864-16.384 36.864-36.864v-1.024c0-20.48-16.384-36.864-36.864-36.864H624.64c-19.968 0-36.352-16.896-36.352-36.864z',
    iconThirdGain:
      'M292.571429 1024v-146.285714h1024v146.285714H292.571429zM0 438.857143h1316.571429v146.285714H0v-146.285714zM658.285714 0h658.285715v146.285714H658.285714V0z',
    iconLocalGain:
      'M809.6 851.2H214.4c-54.4 0-96-44.8-96-96V268.8c0-54.4 44.8-96 96-96h128c54.4 0 96 44.8 96 96v25.6c0 6.4 6.4 9.6 9.6 9.6h355.2c54.4 0 96 44.8 96 96v352c6.4 54.4-38.4 99.2-89.6 99.2zM214.4 236.8c-19.2 0-32 16-32 32v483.2c0 19.2 16 32 32 32h592c19.2 0 32-16 32-32v-352c0-19.2-16-32-32-32H451.2c-41.6 0-73.6-35.2-73.6-73.6v-25.6c0-19.2-16-32-32-32H214.4z',
    iconSearch:
      'M881.3 899c-2.6 0-5.1-1-7.1-2.9L620.7 642.6c-3.9-3.9-3.9-10.2 0-14.1 3.9-3.9 10.2-3.9 14.1 0L888.3 882c3.9 3.9 3.9 10.2 0 14.1-1.9 1.9-4.4 2.9-7 2.9zM365.4 678.9c-79 0-153.3-30.8-209.2-86.7-55.9-55.9-86.7-130.2-86.7-209.1 0-79 30.8-153.3 86.7-209.1 55.9-55.9 130.2-86.7 209.1-86.7 86.4 0 168.3 37.6 224.6 103.3 3.6 4.2 3.1 10.5-1.1 14.1-4.2 3.6-10.5 3.1-14.1-1.1-52.5-61.2-128.8-96.3-209.4-96.3-152.1 0-275.8 123.7-275.8 275.8s123.8 275.8 275.9 275.8c152.1 0 275.8-123.7 275.8-275.8 0-23-2.8-45.9-8.4-67.8-1.4-5.4 1.9-10.8 7.2-12.1 5.4-1.4 10.8 1.9 12.1 7.2 6 23.6 9 48.1 9 72.8 0 79-30.8 153.3-86.7 209.2-55.7 55.7-130 86.5-209 86.5z',
    iconArrowdown:
      'M520.218 676.317l389.896-389.896c11.266-11.265 29.662-11.301 40.987 0.024 11.301 11.301 11.335 29.675 0.023 40.986L540.978 737.578c-11.266 11.265-29.662 11.301-40.986-0.024a29.165 29.165 0 0 1-3.173-3.756L73.603 339.142c-11.7-10.91-12.307-29.273-1.407-40.962 10.923-11.713 29.309-12.32 40.961-1.454l407.061 379.591z',
    iconShrink:
      'M128 192l0-64L896 128l0 64-768 0z m192 447.808l-192-128 192-128 0 256zM384 544l0-64L896 480l0 64-512 0zM128 896l0-64L896 832V896l-768 0z',
    iconPlay:
      'M509.683235 61.691037c-247.329015 0-447.848934 200.519919-447.848934 447.863261 0 247.331062 200.519919 447.852004 447.848934 447.852004 247.331062 0 447.866331-200.519919 447.866331-447.852004C957.549565 262.210957 757.014296 61.691037 509.683235 61.691037zM712.38075 532.75265l0 1.069355-305.282938 201.956641c-4.439102 5.989411-11.513218 9.918907-19.569708 9.918907-13.46364 0-24.408923-10.945283-24.408923-24.437575 0-0.868787 0.157589-1.707898 0.25685-2.548032l-0.25685-0.168846L363.119181 300.56652l0.25685-0.127913c-0.099261-0.868787-0.25685-1.707898-0.25685-2.587941 0-13.507642 10.945283-24.437575 24.408923-24.437575 7.6574 0 14.361079 3.570315 18.872836 9.05012l305.97981 202.811102 0 1.069355c9.907651 3.115967 17.164938 12.268418 17.164938 23.210631C729.545688 520.498558 722.287377 529.651009 712.38075 532.75265z'
  }

  const complexSvgs = {
    iconVip: [
      {
        d:
          'M441.6 270.933c-17.067-6.4-34.133 0-42.667 17.067L249.6 642.133 100.267 288c-6.4-17.067-25.6-23.467-42.667-17.067-14.933 6.4-21.333 25.6-14.933 42.667l179.2 422.4c0 2.133 2.133 4.267 4.266 6.4l2.134 2.133 6.4 6.4h2.133c2.133 0 2.133 2.134 4.267 2.134h4.266c2.134 0 6.4 2.133 8.534 2.133 2.133 0 6.4 0 8.533-2.133h4.267c2.133 0 2.133-2.134 4.266-2.134h2.134l6.4-6.4 2.133-2.133c2.133-2.133 2.133-4.267 4.267-6.4l179.2-422.4c0-17.067-6.4-36.267-23.467-42.667z',
        c: 'rgba(255,255,255,0.7)'
      },
      {
        d:
          'M435.2 755.2c-4.267 0-8.533 0-12.8-2.133-17.067-6.4-23.467-25.6-17.067-42.667l179.2-422.4c6.4-17.067 25.6-23.467 42.667-17.067 17.067 6.4 23.467 25.6 17.067 42.667L465.067 736c-6.4 12.8-17.067 19.2-29.867 19.2z',
        c: '#FFBB12'
      },
      {
        d:
          'M797.867 268.8c-12.8 0-25.6 6.4-29.867 19.2L588.8 710.4c-6.4 17.067 0 34.133 17.067 42.667 4.266 2.133 8.533 2.133 12.8 2.133 12.8 0 23.466-6.4 29.866-19.2l51.2-123.733C729.6 629.333 761.6 640 797.867 640c102.4 0 185.6-83.2 185.6-185.6s-83.2-185.6-185.6-185.6z m0 307.2c-25.6 0-51.2-8.533-72.534-23.467l91.734-217.6c57.6 8.534 102.4 59.734 102.4 119.467 0 68.267-53.334 121.6-121.6 121.6z',
        c: 'rgba(255,255,255,0.7)'
      }
    ]
  }

  return Object.assign({}, assets, svgs, complexSvgs)
}
