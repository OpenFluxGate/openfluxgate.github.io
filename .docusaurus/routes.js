import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', '672'),
    exact: true
  },
  {
    path: '/api/v2',
    component: ComponentCreator('/api/v2', '550'),
    exact: true
  },
  {
    path: '/faq',
    component: ComponentCreator('/faq', '5bb'),
    exact: true
  },
  {
    path: '/getting-started',
    component: ComponentCreator('/getting-started', '67e'),
    exact: true
  },
  {
    path: '/release-notes',
    component: ComponentCreator('/release-notes', '344'),
    exact: true
  },
  {
    path: '/release-notes/rest-api',
    component: ComponentCreator('/release-notes/rest-api', '7c6'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/android-core',
    component: ComponentCreator('/android-core', 'e54'),
    routes: [
      {
        path: '/android-core',
        component: ComponentCreator('/android-core', 'f1a'),
        routes: [
          {
            path: '/android-core/tags',
            component: ComponentCreator('/android-core/tags', '08b'),
            exact: true
          },
          {
            path: '/android-core/tags/android-core',
            component: ComponentCreator('/android-core/tags/android-core', '56d'),
            exact: true
          },
          {
            path: '/android-core/tags/chat',
            component: ComponentCreator('/android-core/tags/chat', 'ddd'),
            exact: true
          },
          {
            path: '/android-core/tags/create',
            component: ComponentCreator('/android-core/tags/create', 'ccf'),
            exact: true
          },
          {
            path: '/android-core/tags/livestream',
            component: ComponentCreator('/android-core/tags/livestream', '143'),
            exact: true
          },
          {
            path: '/android-core/tags/local-user',
            component: ComponentCreator('/android-core/tags/local-user', '372'),
            exact: true
          },
          {
            path: '/android-core/tags/participants',
            component: ComponentCreator('/android-core/tags/participants', '5a3'),
            exact: true
          },
          {
            path: '/android-core/tags/plugins',
            component: ComponentCreator('/android-core/tags/plugins', '07a'),
            exact: true
          },
          {
            path: '/android-core/tags/polls',
            component: ComponentCreator('/android-core/tags/polls', '7b1'),
            exact: true
          },
          {
            path: '/android-core/tags/quickstart',
            component: ComponentCreator('/android-core/tags/quickstart', 'cc0'),
            exact: true
          },
          {
            path: '/android-core/tags/recording',
            component: ComponentCreator('/android-core/tags/recording', 'd58'),
            exact: true
          },
          {
            path: '/android-core/tags/releasenotes',
            component: ComponentCreator('/android-core/tags/releasenotes', '092'),
            exact: true
          },
          {
            path: '/android-core/tags/room-metadata',
            component: ComponentCreator('/android-core/tags/room-metadata', '75c'),
            exact: true
          },
          {
            path: '/android-core/tags/self',
            component: ComponentCreator('/android-core/tags/self', '93f'),
            exact: true
          },
          {
            path: '/android-core/tags/self-events',
            component: ComponentCreator('/android-core/tags/self-events', '977'),
            exact: true
          },
          {
            path: '/android-core/tags/setup',
            component: ComponentCreator('/android-core/tags/setup', '865'),
            exact: true
          },
          {
            path: '/android-core/tags/stage',
            component: ComponentCreator('/android-core/tags/stage', 'f5c'),
            exact: true
          },
          {
            path: '/android-core/tags/v-2',
            component: ComponentCreator('/android-core/tags/v-2', '941'),
            exact: true
          },
          {
            path: '/android-core/tags/votes',
            component: ComponentCreator('/android-core/tags/votes', 'b4a'),
            exact: true
          },
          {
            path: '/android-core/tags/waiting-room',
            component: ComponentCreator('/android-core/tags/waiting-room', '1e0'),
            exact: true
          },
          {
            path: '/android-core/tags/waitlisted',
            component: ComponentCreator('/android-core/tags/waitlisted', 'e5e'),
            exact: true
          },
          {
            path: '/android-core',
            component: ComponentCreator('/android-core', '3b2'),
            routes: [
              {
                path: '/android-core',
                component: ComponentCreator('/android-core', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/chat/introduction',
                component: ComponentCreator('/android-core/chat/introduction', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/chat/receiving-chat-messages',
                component: ComponentCreator('/android-core/chat/receiving-chat-messages', '10a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/chat/sending-a-chat-message',
                component: ComponentCreator('/android-core/chat/sending-a-chat-message', 'f36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/error-codes',
                component: ComponentCreator('/android-core/error-codes', '8e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/Introduction',
                component: ComponentCreator('/android-core/Introduction', 'e99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/dyte-livestream-listener',
                component: ComponentCreator('/android-core/livestream/dyte-livestream-listener', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/dyte-livestream-object',
                component: ComponentCreator('/android-core/livestream/dyte-livestream-object', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/introduction',
                component: ComponentCreator('/android-core/livestream/introduction', '0d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/events',
                component: ComponentCreator('/android-core/local-user/events', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/introduction',
                component: ComponentCreator('/android-core/local-user/introduction', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/manage-media-devices',
                component: ComponentCreator('/android-core/local-user/manage-media-devices', 'b2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/manage-permissions',
                component: ComponentCreator('/android-core/local-user/manage-permissions', '285'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants',
                component: ComponentCreator('/android-core/participants', '182'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants/events',
                component: ComponentCreator('/android-core/participants/events', 'c1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants/participant-object',
                component: ComponentCreator('/android-core/participants/participant-object', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants/waitlisted-participants',
                component: ComponentCreator('/android-core/participants/waitlisted-participants', 'bc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/plugins/enable-disable-plugin',
                component: ComponentCreator('/android-core/plugins/enable-disable-plugin', 'e97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/plugins/extra',
                component: ComponentCreator('/android-core/plugins/extra', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/plugins/introduction',
                component: ComponentCreator('/android-core/plugins/introduction', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/polls/creating-a-poll',
                component: ComponentCreator('/android-core/polls/creating-a-poll', '03f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/polls/introduction',
                component: ComponentCreator('/android-core/polls/introduction', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/polls/voting-on-a-poll',
                component: ComponentCreator('/android-core/polls/voting-on-a-poll', '553'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/handling-permissions',
                component: ComponentCreator('/android-core/pre-call/handling-permissions', '937'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/media-preview',
                component: ComponentCreator('/android-core/pre-call/media-preview', '561'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/meeting-meta',
                component: ComponentCreator('/android-core/pre-call/meeting-meta', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/waiting-room',
                component: ComponentCreator('/android-core/pre-call/waiting-room', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/recording',
                component: ComponentCreator('/android-core/recording', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/release-notes',
                component: ComponentCreator('/android-core/release-notes', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/room-metadata',
                component: ComponentCreator('/android-core/room-metadata', '58c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/stage-management/host-controls',
                component: ComponentCreator('/android-core/stage-management/host-controls', 'f77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/stage-management/introduction',
                component: ComponentCreator('/android-core/stage-management/introduction', 'dfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/stage-management/viewer-participants',
                component: ComponentCreator('/android-core/stage-management/viewer-participants', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/upgrade-v2/breaking-changes-migration',
                component: ComponentCreator('/android-core/upgrade-v2/breaking-changes-migration', '437'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/upgrade-v2/introduction',
                component: ComponentCreator('/android-core/upgrade-v2/introduction', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/android',
    component: ComponentCreator('/android', '776'),
    routes: [
      {
        path: '/android',
        component: ComponentCreator('/android', 'b72'),
        routes: [
          {
            path: '/android/tags',
            component: ComponentCreator('/android/tags', '5ef'),
            exact: true
          },
          {
            path: '/android/tags/android-ui-kit',
            component: ComponentCreator('/android/tags/android-ui-kit', '955'),
            exact: true
          },
          {
            path: '/android/tags/plugins',
            component: ComponentCreator('/android/tags/plugins', '227'),
            exact: true
          },
          {
            path: '/android/tags/releasenotes',
            component: ComponentCreator('/android/tags/releasenotes', '95e'),
            exact: true
          },
          {
            path: '/android',
            component: ComponentCreator('/android', 'dd5'),
            routes: [
              {
                path: '/android',
                component: ComponentCreator('/android', 'c2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/advanced-usage',
                component: ComponentCreator('/android/advanced-usage', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/add-audio-video-device',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/add-audio-video-device', '726'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/add-audio-video-preview',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/add-audio-video-preview', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/edit-user-name',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/edit-user-name', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/initial-code-skeleton',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/initial-code-skeleton', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/default-setup-screen',
                component: ComponentCreator('/android/build-pre-call-ui/default-setup-screen', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/chat/prebuilt-screen',
                component: ComponentCreator('/android/chat/prebuilt-screen', '13f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components',
                component: ComponentCreator('/android/components', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-audio-selector',
                component: ComponentCreator('/android/components/dyte-audio-selector', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-audio-visualizer',
                component: ComponentCreator('/android/components/dyte-audio-visualizer', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-avatar',
                component: ComponentCreator('/android/components/dyte-avatar', '503'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-button',
                component: ComponentCreator('/android/components/dyte-button', '198'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-camera-toggle',
                component: ComponentCreator('/android/components/dyte-camera-toggle', '971'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-chat',
                component: ComponentCreator('/android/components/dyte-chat', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-clock',
                component: ComponentCreator('/android/components/dyte-clock', 'c23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-controlbar-button',
                component: ComponentCreator('/android/components/dyte-controlbar-button', 'bd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-grid',
                component: ComponentCreator('/android/components/dyte-grid', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-grid-pagination',
                component: ComponentCreator('/android/components/dyte-grid-pagination', '08f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-idle-screen',
                component: ComponentCreator('/android/components/dyte-idle-screen', '790'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-join-stage',
                component: ComponentCreator('/android/components/dyte-join-stage', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-leave-button',
                component: ComponentCreator('/android/components/dyte-leave-button', '09e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-leave-meeting',
                component: ComponentCreator('/android/components/dyte-leave-meeting', 'c8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-meeting',
                component: ComponentCreator('/android/components/dyte-meeting', 'b00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-meeting-title',
                component: ComponentCreator('/android/components/dyte-meeting-title', 'bb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-mic-toggle',
                component: ComponentCreator('/android/components/dyte-mic-toggle', 'ee5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-more-toggle',
                component: ComponentCreator('/android/components/dyte-more-toggle', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-name-tag',
                component: ComponentCreator('/android/components/dyte-name-tag', 'fc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-participant-count',
                component: ComponentCreator('/android/components/dyte-participant-count', 'bc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-participants',
                component: ComponentCreator('/android/components/dyte-participants', 'ed8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-plugins',
                component: ComponentCreator('/android/components/dyte-plugins', '07a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-poll-form',
                component: ComponentCreator('/android/components/dyte-poll-form', 'f28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-polls',
                component: ComponentCreator('/android/components/dyte-polls', 'e04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-recording-indicator',
                component: ComponentCreator('/android/components/dyte-recording-indicator', '9f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-settings',
                component: ComponentCreator('/android/components/dyte-settings', 'ee4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-setup-screen',
                component: ComponentCreator('/android/components/dyte-setup-screen', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-video-selector',
                component: ComponentCreator('/android/components/dyte-video-selector', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-webinar-stage-toggle',
                component: ComponentCreator('/android/components/dyte-webinar-stage-toggle', 'bf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/customize-meeting-ui',
                component: ComponentCreator('/android/customize-meeting-ui', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/participants/introduction',
                component: ComponentCreator('/android/participants/introduction', 'b79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/participants/prebuilt',
                component: ComponentCreator('/android/participants/prebuilt', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/plugins/introduction',
                component: ComponentCreator('/android/plugins/introduction', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/plugins/prebuilt',
                component: ComponentCreator('/android/plugins/prebuilt', 'dfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/polls/prebuilt-create-poll',
                component: ComponentCreator('/android/polls/prebuilt-create-poll', '09b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/polls/prebuilt-polls-screen',
                component: ComponentCreator('/android/polls/prebuilt-polls-screen', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/release-notes',
                component: ComponentCreator('/android/release-notes', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/render-participant-videos/custom-ui',
                component: ComponentCreator('/android/render-participant-videos/custom-ui', '9bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/render-participant-videos/using-dytegrid',
                component: ComponentCreator('/android/render-participant-videos/using-dytegrid', 'd52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/sample-app',
                component: ComponentCreator('/android/sample-app', 'dea'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/angular-ui-kit',
    component: ComponentCreator('/angular-ui-kit', 'c13'),
    routes: [
      {
        path: '/angular-ui-kit',
        component: ComponentCreator('/angular-ui-kit', '2f4'),
        routes: [
          {
            path: '/angular-ui-kit/tags',
            component: ComponentCreator('/angular-ui-kit/tags', 'ba3'),
            exact: true
          },
          {
            path: '/angular-ui-kit/tags/releasenotes',
            component: ComponentCreator('/angular-ui-kit/tags/releasenotes', '8de'),
            exact: true
          },
          {
            path: '/angular-ui-kit',
            component: ComponentCreator('/angular-ui-kit', 'dc4'),
            routes: [
              {
                path: '/angular-ui-kit',
                component: ComponentCreator('/angular-ui-kit', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/basics/components-basics',
                component: ComponentCreator('/angular-ui-kit/basics/components-basics', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/basics/pre-requisite',
                component: ComponentCreator('/angular-ui-kit/basics/pre-requisite', 'b45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components',
                component: ComponentCreator('/angular-ui-kit/components', '167'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-audio-visualizer',
                component: ComponentCreator('/angular-ui-kit/components/dyte-audio-visualizer', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-avatar',
                component: ComponentCreator('/angular-ui-kit/components/dyte-avatar', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-button',
                component: ComponentCreator('/angular-ui-kit/components/dyte-button', 'dd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-camera-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-camera-toggle', '868'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-chat',
                component: ComponentCreator('/angular-ui-kit/components/dyte-chat', 'd35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-chat-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-chat-toggle', '695'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-clock',
                component: ComponentCreator('/angular-ui-kit/components/dyte-clock', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-confirmation-modal',
                component: ComponentCreator('/angular-ui-kit/components/dyte-confirmation-modal', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-controlbar',
                component: ComponentCreator('/angular-ui-kit/components/dyte-controlbar', '8c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-controlbar-button',
                component: ComponentCreator('/angular-ui-kit/components/dyte-controlbar-button', '51d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-dialog',
                component: ComponentCreator('/angular-ui-kit/components/dyte-dialog', 'f3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-dialog-manager',
                component: ComponentCreator('/angular-ui-kit/components/dyte-dialog-manager', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-emoji-picker',
                component: ComponentCreator('/angular-ui-kit/components/dyte-emoji-picker', '4a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-ended-screen',
                component: ComponentCreator('/angular-ui-kit/components/dyte-ended-screen', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-file-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-file-message', '785'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-fullscreen-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-fullscreen-toggle', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-grid', '88b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-grid-pagination',
                component: ComponentCreator('/angular-ui-kit/components/dyte-grid-pagination', 'b0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-header',
                component: ComponentCreator('/angular-ui-kit/components/dyte-header', 'e2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-icon',
                component: ComponentCreator('/angular-ui-kit/components/dyte-icon', 'f52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-idle-screen',
                component: ComponentCreator('/angular-ui-kit/components/dyte-idle-screen', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-image-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-image-message', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-image-viewer',
                component: ComponentCreator('/angular-ui-kit/components/dyte-image-viewer', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-leave-button',
                component: ComponentCreator('/angular-ui-kit/components/dyte-leave-button', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-leave-meeting',
                component: ComponentCreator('/angular-ui-kit/components/dyte-leave-meeting', '253'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-logo',
                component: ComponentCreator('/angular-ui-kit/components/dyte-logo', '506'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-meeting',
                component: ComponentCreator('/angular-ui-kit/components/dyte-meeting', 'ce1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-meeting-title',
                component: ComponentCreator('/angular-ui-kit/components/dyte-meeting-title', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-menu',
                component: ComponentCreator('/angular-ui-kit/components/dyte-menu', 'b7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-menu-item',
                component: ComponentCreator('/angular-ui-kit/components/dyte-menu-item', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-menu-list',
                component: ComponentCreator('/angular-ui-kit/components/dyte-menu-list', 'c07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-mic-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-mic-toggle', '010'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-mixed-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-mixed-grid', 'be8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-more-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-more-toggle', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-name-tag',
                component: ComponentCreator('/angular-ui-kit/components/dyte-name-tag', '579'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-network-indicator',
                component: ComponentCreator('/angular-ui-kit/components/dyte-network-indicator', 'b80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-notification',
                component: ComponentCreator('/angular-ui-kit/components/dyte-notification', '181'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-notifications',
                component: ComponentCreator('/angular-ui-kit/components/dyte-notifications', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-overlay-modal',
                component: ComponentCreator('/angular-ui-kit/components/dyte-overlay-modal', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participant',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participant', '910'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participant-count',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participant-count', '34c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participant-tile',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participant-tile', 'bcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants-audio',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants-audio', 'cbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants-stage-list',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants-stage-list', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants-toggle', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-permissions-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-permissions-message', '984'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-plugin-main',
                component: ComponentCreator('/angular-ui-kit/components/dyte-plugin-main', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-plugins',
                component: ComponentCreator('/angular-ui-kit/components/dyte-plugins', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-plugins-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-plugins-toggle', '954'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-poll',
                component: ComponentCreator('/angular-ui-kit/components/dyte-poll', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-poll-form',
                component: ComponentCreator('/angular-ui-kit/components/dyte-poll-form', 'b54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-polls',
                component: ComponentCreator('/angular-ui-kit/components/dyte-polls', '3d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-polls-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-polls-toggle', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-recording-indicator',
                component: ComponentCreator('/angular-ui-kit/components/dyte-recording-indicator', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-recording-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-recording-toggle', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-remote-access-manager',
                component: ComponentCreator('/angular-ui-kit/components/dyte-remote-access-manager', '595'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-screen-share-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-screen-share-toggle', 'ae5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-screenshare-view',
                component: ComponentCreator('/angular-ui-kit/components/dyte-screenshare-view', '8a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings-audio',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings-audio', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings-toggle', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings-video',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings-video', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-setup-screen',
                component: ComponentCreator('/angular-ui-kit/components/dyte-setup-screen', '5ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-sidebar',
                component: ComponentCreator('/angular-ui-kit/components/dyte-sidebar', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-simple-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-simple-grid', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-spinner',
                component: ComponentCreator('/angular-ui-kit/components/dyte-spinner', 'a6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-spotlight-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-spotlight-grid', '829'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-stage',
                component: ComponentCreator('/angular-ui-kit/components/dyte-stage', 'cab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-switch',
                component: ComponentCreator('/angular-ui-kit/components/dyte-switch', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-text-field',
                component: ComponentCreator('/angular-ui-kit/components/dyte-text-field', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-text-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-text-message', '1c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-tooltip',
                component: ComponentCreator('/angular-ui-kit/components/dyte-tooltip', '1e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-viewer-count',
                component: ComponentCreator('/angular-ui-kit/components/dyte-viewer-count', 'deb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/customizations/custom-iconpack',
                component: ComponentCreator('/angular-ui-kit/customizations/custom-iconpack', 'f07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/customizations/custom-locale',
                component: ComponentCreator('/angular-ui-kit/customizations/custom-locale', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/design-system',
                component: ComponentCreator('/angular-ui-kit/design-system', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/quickstart',
                component: ComponentCreator('/angular-ui-kit/quickstart', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference',
                component: ComponentCreator('/angular-ui-kit/reference', 'c45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/angular-ui-kit/reference/classes/DyteNotificationsAudio', 'a32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/Notification',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/Notification', 'ada'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/PollObject',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/PollObject', '5cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/States',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/States', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/UIConfig',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/UIConfig', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/UserPreferences',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/UserPreferences', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/release-notes',
                component: ComponentCreator('/angular-ui-kit/release-notes', '84d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cli',
    component: ComponentCreator('/cli', 'deb'),
    routes: [
      {
        path: '/cli',
        component: ComponentCreator('/cli', '62d'),
        routes: [
          {
            path: '/cli',
            component: ComponentCreator('/cli', '596'),
            routes: [
              {
                path: '/cli',
                component: ComponentCreator('/cli', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/getting-started',
                component: ComponentCreator('/cli/getting-started', 'dbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/meetings',
                component: ComponentCreator('/cli/meetings', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/plugins',
                component: ComponentCreator('/cli/plugins', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/recording',
                component: ComponentCreator('/cli/recording', '803'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/webhooks',
                component: ComponentCreator('/cli/webhooks', '0ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/community-packages',
    component: ComponentCreator('/community-packages', 'd50'),
    routes: [
      {
        path: '/community-packages',
        component: ComponentCreator('/community-packages', '3c0'),
        routes: [
          {
            path: '/community-packages',
            component: ComponentCreator('/community-packages', 'fc1'),
            routes: [
              {
                path: '/community-packages',
                component: ComponentCreator('/community-packages', '0c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/device-emulator',
                component: ComponentCreator('/community-packages/device-emulator', '8eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/device-emulator/examples',
                component: ComponentCreator('/community-packages/device-emulator/examples', '5e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/socketio-client',
                component: ComponentCreator('/community-packages/socketio-client', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/socketio-client/emitting',
                component: ComponentCreator('/community-packages/socketio-client/emitting', '2de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/socketio-client/initialization',
                component: ComponentCreator('/community-packages/socketio-client/initialization', 'ce2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/flutter-core',
    component: ComponentCreator('/flutter-core', 'ebc'),
    routes: [
      {
        path: '/flutter-core',
        component: ComponentCreator('/flutter-core', 'ef4'),
        routes: [
          {
            path: '/flutter-core/tags',
            component: ComponentCreator('/flutter-core/tags', '505'),
            exact: true
          },
          {
            path: '/flutter-core/tags/chat',
            component: ComponentCreator('/flutter-core/tags/chat', 'd38'),
            exact: true
          },
          {
            path: '/flutter-core/tags/create',
            component: ComponentCreator('/flutter-core/tags/create', '77f'),
            exact: true
          },
          {
            path: '/flutter-core/tags/flutter-core',
            component: ComponentCreator('/flutter-core/tags/flutter-core', '47b'),
            exact: true
          },
          {
            path: '/flutter-core/tags/host-actions',
            component: ComponentCreator('/flutter-core/tags/host-actions', '629'),
            exact: true
          },
          {
            path: '/flutter-core/tags/livestream',
            component: ComponentCreator('/flutter-core/tags/livestream', '7c3'),
            exact: true
          },
          {
            path: '/flutter-core/tags/local-user',
            component: ComponentCreator('/flutter-core/tags/local-user', '4b3'),
            exact: true
          },
          {
            path: '/flutter-core/tags/mobile-core',
            component: ComponentCreator('/flutter-core/tags/mobile-core', '139'),
            exact: true
          },
          {
            path: '/flutter-core/tags/participant',
            component: ComponentCreator('/flutter-core/tags/participant', '74f'),
            exact: true
          },
          {
            path: '/flutter-core/tags/participants',
            component: ComponentCreator('/flutter-core/tags/participants', '77f'),
            exact: true
          },
          {
            path: '/flutter-core/tags/permissions',
            component: ComponentCreator('/flutter-core/tags/permissions', '847'),
            exact: true
          },
          {
            path: '/flutter-core/tags/polls',
            component: ComponentCreator('/flutter-core/tags/polls', '268'),
            exact: true
          },
          {
            path: '/flutter-core/tags/quickstart',
            component: ComponentCreator('/flutter-core/tags/quickstart', '85f'),
            exact: true
          },
          {
            path: '/flutter-core/tags/recording',
            component: ComponentCreator('/flutter-core/tags/recording', 'e98'),
            exact: true
          },
          {
            path: '/flutter-core/tags/releasenotes',
            component: ComponentCreator('/flutter-core/tags/releasenotes', '87c'),
            exact: true
          },
          {
            path: '/flutter-core/tags/room-metadata',
            component: ComponentCreator('/flutter-core/tags/room-metadata', '40e'),
            exact: true
          },
          {
            path: '/flutter-core/tags/self',
            component: ComponentCreator('/flutter-core/tags/self', 'ab1'),
            exact: true
          },
          {
            path: '/flutter-core/tags/self-events',
            component: ComponentCreator('/flutter-core/tags/self-events', '61d'),
            exact: true
          },
          {
            path: '/flutter-core/tags/stage',
            component: ComponentCreator('/flutter-core/tags/stage', '7aa'),
            exact: true
          },
          {
            path: '/flutter-core/tags/votes',
            component: ComponentCreator('/flutter-core/tags/votes', '94c'),
            exact: true
          },
          {
            path: '/flutter-core/tags/waiting-room',
            component: ComponentCreator('/flutter-core/tags/waiting-room', 'bda'),
            exact: true
          },
          {
            path: '/flutter-core/tags/waitlisted',
            component: ComponentCreator('/flutter-core/tags/waitlisted', '8c5'),
            exact: true
          },
          {
            path: '/flutter-core',
            component: ComponentCreator('/flutter-core', '338'),
            routes: [
              {
                path: '/flutter-core',
                component: ComponentCreator('/flutter-core', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/chat/introduction',
                component: ComponentCreator('/flutter-core/chat/introduction', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/chat/receiving-chat-messages',
                component: ComponentCreator('/flutter-core/chat/receiving-chat-messages', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/chat/sending-a-chat-message',
                component: ComponentCreator('/flutter-core/chat/sending-a-chat-message', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/host-actions',
                component: ComponentCreator('/flutter-core/host-actions', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/introduction',
                component: ComponentCreator('/flutter-core/introduction', '6be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/livestream',
                component: ComponentCreator('/flutter-core/livestream', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/events',
                component: ComponentCreator('/flutter-core/local-user/events', '8eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/introduction',
                component: ComponentCreator('/flutter-core/local-user/introduction', '0b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/manage-media-devices',
                component: ComponentCreator('/flutter-core/local-user/manage-media-devices', '645'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/manage-permissions',
                component: ComponentCreator('/flutter-core/local-user/manage-permissions', '8e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/screen-share-iOS-guide',
                component: ComponentCreator('/flutter-core/local-user/screen-share-iOS-guide', '0c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants',
                component: ComponentCreator('/flutter-core/participants', '0e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/events',
                component: ComponentCreator('/flutter-core/participants/events', 'ddd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/introduction',
                component: ComponentCreator('/flutter-core/participants/introduction', '3c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/participant-object',
                component: ComponentCreator('/flutter-core/participants/participant-object', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/waitlisted-participants',
                component: ComponentCreator('/flutter-core/participants/waitlisted-participants', '5da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/polls/creating-a-poll',
                component: ComponentCreator('/flutter-core/polls/creating-a-poll', '7a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/polls/introduction',
                component: ComponentCreator('/flutter-core/polls/introduction', 'ad9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/polls/voting-on-a-poll',
                component: ComponentCreator('/flutter-core/polls/voting-on-a-poll', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/pre-call/media-preview',
                component: ComponentCreator('/flutter-core/pre-call/media-preview', '153'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/pre-call/meeting-meta',
                component: ComponentCreator('/flutter-core/pre-call/meeting-meta', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/pre-call/waiting-room',
                component: ComponentCreator('/flutter-core/pre-call/waiting-room', '166'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/recording',
                component: ComponentCreator('/flutter-core/recording', 'ddc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/release-notes',
                component: ComponentCreator('/flutter-core/release-notes', 'd38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/room-metadata',
                component: ComponentCreator('/flutter-core/room-metadata', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/stage-management/host-controls',
                component: ComponentCreator('/flutter-core/stage-management/host-controls', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/stage-management/introduction',
                component: ComponentCreator('/flutter-core/stage-management/introduction', 'ddf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/stage-management/viewer-participants',
                component: ComponentCreator('/flutter-core/stage-management/viewer-participants', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/flutter',
    component: ComponentCreator('/flutter', '92d'),
    routes: [
      {
        path: '/flutter',
        component: ComponentCreator('/flutter', 'd3e'),
        routes: [
          {
            path: '/flutter/tags',
            component: ComponentCreator('/flutter/tags', 'b30'),
            exact: true
          },
          {
            path: '/flutter/tags/design-system',
            component: ComponentCreator('/flutter/tags/design-system', '16d'),
            exact: true
          },
          {
            path: '/flutter/tags/flutter-ui-kit',
            component: ComponentCreator('/flutter/tags/flutter-ui-kit', '9b5'),
            exact: true
          },
          {
            path: '/flutter/tags/releasenotes',
            component: ComponentCreator('/flutter/tags/releasenotes', 'e39'),
            exact: true
          },
          {
            path: '/flutter',
            component: ComponentCreator('/flutter', 'ccc'),
            routes: [
              {
                path: '/flutter',
                component: ComponentCreator('/flutter', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-audio-indicator-icon-widget',
                component: ComponentCreator('/flutter/Components/dyte-audio-indicator-icon-widget', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-chat-icon-widget',
                component: ComponentCreator('/flutter/Components/dyte-chat-icon-widget', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-join-button',
                component: ComponentCreator('/flutter/Components/dyte-join-button', '57d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-leave-button',
                component: ComponentCreator('/flutter/Components/dyte-leave-button', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-leave-meeting-dialog',
                component: ComponentCreator('/flutter/Components/dyte-leave-meeting-dialog', '5e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-meeting-title',
                component: ComponentCreator('/flutter/Components/dyte-meeting-title', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-name-tag-widget',
                component: ComponentCreator('/flutter/Components/dyte-name-tag-widget', 'e88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-participant-tile',
                component: ComponentCreator('/flutter/Components/dyte-participant-tile', 'f3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-participants-icon-widget',
                component: ComponentCreator('/flutter/Components/dyte-participants-icon-widget', 'ba1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-plugins-screen',
                component: ComponentCreator('/flutter/Components/dyte-plugins-screen', 'aa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-polls-screen',
                component: ComponentCreator('/flutter/Components/dyte-polls-screen', '6a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-provider',
                component: ComponentCreator('/flutter/Components/dyte-provider', '5d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-self-audio-toggle',
                component: ComponentCreator('/flutter/Components/dyte-self-audio-toggle', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-self-video-toggle',
                component: ComponentCreator('/flutter/Components/dyte-self-video-toggle', '900'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-setup-screen-component',
                component: ComponentCreator('/flutter/Components/dyte-setup-screen-component', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/design-token',
                component: ComponentCreator('/flutter/design-token', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/meeting-locale',
                component: ComponentCreator('/flutter/meeting-locale', 'fe8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/quickstart',
                component: ComponentCreator('/flutter/quickstart', '95f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/release-notes',
                component: ComponentCreator('/flutter/release-notes', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/guides',
    component: ComponentCreator('/guides', '78d'),
    routes: [
      {
        path: '/guides',
        component: ComponentCreator('/guides', '652'),
        routes: [
          {
            path: '/guides/tags',
            component: ComponentCreator('/guides/tags', '98e'),
            exact: true
          },
          {
            path: '/guides/tags/migration',
            component: ComponentCreator('/guides/tags/migration', '423'),
            exact: true
          },
          {
            path: '/guides/tags/setup',
            component: ComponentCreator('/guides/tags/setup', '91e'),
            exact: true
          },
          {
            path: '/guides',
            component: ComponentCreator('/guides', '5a0'),
            routes: [
              {
                path: '/guides',
                component: ComponentCreator('/guides', '4f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/ai',
                component: ComponentCreator('/guides/capabilities/ai', 'aa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/ai/meeting-summary',
                component: ComponentCreator('/guides/capabilities/ai/meeting-summary', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/ai/meeting-transcription',
                component: ComponentCreator('/guides/capabilities/ai/meeting-transcription', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/processing',
                component: ComponentCreator('/guides/capabilities/audio/processing', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/transcriptionAWS',
                component: ComponentCreator('/guides/capabilities/audio/transcriptionAWS', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/transcriptionGoogle',
                component: ComponentCreator('/guides/capabilities/audio/transcriptionGoogle', 'e6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/transcriptions',
                component: ComponentCreator('/guides/capabilities/audio/transcriptions', 'f95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/breakoutroom/create-breakout-rooms',
                component: ComponentCreator('/guides/capabilities/breakoutroom/create-breakout-rooms', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/breakoutroom/integrating-breakout-rooms',
                component: ComponentCreator('/guides/capabilities/breakoutroom/integrating-breakout-rooms', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/breakoutroom/introduction-breakout-rooms',
                component: ComponentCreator('/guides/capabilities/breakoutroom/introduction-breakout-rooms', '995'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/chat/export-chat-dump',
                component: ComponentCreator('/guides/capabilities/chat/export-chat-dump', '251'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/misc/embed',
                component: ComponentCreator('/guides/capabilities/misc/embed', '152'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/misc/livestreaming-other-platforms',
                component: ComponentCreator('/guides/capabilities/misc/livestreaming-other-platforms', '1ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins',
                component: ComponentCreator('/guides/capabilities/plugins', '2ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/docshare',
                component: ComponentCreator('/guides/capabilities/plugins/docshare', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/rendering',
                component: ComponentCreator('/guides/capabilities/plugins/rendering', 'a4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/streamer',
                component: ComponentCreator('/guides/capabilities/plugins/streamer', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/whiteboard',
                component: ComponentCreator('/guides/capabilities/plugins/whiteboard', '241'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/polls',
                component: ComponentCreator('/guides/capabilities/polls', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/polls/getting_started',
                component: ComponentCreator('/guides/capabilities/polls/getting_started', '442'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/polls/uikit',
                component: ComponentCreator('/guides/capabilities/polls/uikit', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording',
                component: ComponentCreator('/guides/capabilities/recording', '3d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/add-watermark',
                component: ComponentCreator('/guides/capabilities/recording/add-watermark', '459'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/configure-audio-codec',
                component: ComponentCreator('/guides/capabilities/recording/configure-audio-codec', 'b1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/configure-codecs',
                component: ComponentCreator('/guides/capabilities/recording/configure-codecs', '81d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/configure-dyte-bucket-config',
                component: ComponentCreator('/guides/capabilities/recording/configure-dyte-bucket-config', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/create-record-app-using-sdks',
                component: ComponentCreator('/guides/capabilities/recording/create-record-app-using-sdks', '085'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/custom-cloud-storage',
                component: ComponentCreator('/guides/capabilities/recording/custom-cloud-storage', '75e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/interactive-recording',
                component: ComponentCreator('/guides/capabilities/recording/interactive-recording', 'd26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/manage-recording-config-hierarchy',
                component: ComponentCreator('/guides/capabilities/recording/manage-recording-config-hierarchy', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/monitor-status',
                component: ComponentCreator('/guides/capabilities/recording/monitor-status', 'a08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/recording-overview',
                component: ComponentCreator('/guides/capabilities/recording/recording-overview', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/start-recording',
                component: ComponentCreator('/guides/capabilities/recording/start-recording', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/stop-recording',
                component: ComponentCreator('/guides/capabilities/recording/stop-recording', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/screensharing/basics',
                component: ComponentCreator('/guides/capabilities/screensharing/basics', '52e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/screensharing/displaying',
                component: ComponentCreator('/guides/capabilities/screensharing/displaying', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/sip',
                component: ComponentCreator('/guides/capabilities/sip', 'd12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/video/add-virtual-background',
                component: ComponentCreator('/guides/capabilities/video/add-virtual-background', '4db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/video/picture-in-picture',
                component: ComponentCreator('/guides/capabilities/video/picture-in-picture', 'fb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/video/processing',
                component: ComponentCreator('/guides/capabilities/video/processing', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks',
                component: ComponentCreator('/guides/capabilities/webhooks', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/signatures',
                component: ComponentCreator('/guides/capabilities/webhooks/signatures', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/webhook-events',
                component: ComponentCreator('/guides/capabilities/webhooks/webhook-events', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/webhooks-and-events',
                component: ComponentCreator('/guides/capabilities/webhooks/webhooks-and-events', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/webhooks-overview',
                component: ComponentCreator('/guides/capabilities/webhooks/webhooks-overview', '340'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webinar/intro-webinar',
                component: ComponentCreator('/guides/capabilities/webinar/intro-webinar', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/add-participant',
                component: ComponentCreator('/guides/interactive-onboarding/add-participant', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/create-meeting',
                component: ComponentCreator('/guides/interactive-onboarding/create-meeting', 'f6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/init-sdk',
                component: ComponentCreator('/guides/interactive-onboarding/init-sdk', 'be1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/join-meeting',
                component: ComponentCreator('/guides/interactive-onboarding/join-meeting', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/build-live-video-app',
                component: ComponentCreator('/guides/live-video/build-live-video-app', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/client-setup',
                component: ComponentCreator('/guides/live-video/client-setup', '665'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/client-setup/android',
                component: ComponentCreator('/guides/live-video/client-setup/android', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/client-setup/angular',
                component: ComponentCreator('/guides/live-video/client-setup/angular', 'fb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/client-setup/flutter',
                component: ComponentCreator('/guides/live-video/client-setup/flutter', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/client-setup/ios',
                component: ComponentCreator('/guides/live-video/client-setup/ios', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/client-setup/javascript',
                component: ComponentCreator('/guides/live-video/client-setup/javascript', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/client-setup/react',
                component: ComponentCreator('/guides/live-video/client-setup/react', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/concepts',
                component: ComponentCreator('/guides/live-video/concepts', 'd4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/get-started',
                component: ComponentCreator('/guides/live-video/get-started', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/intro-video-conf',
                component: ComponentCreator('/guides/live-video/intro-video-conf', '2c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/live-video/next-steps',
                component: ComponentCreator('/guides/live-video/next-steps', '809'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/advanced/configuring-permissions',
                component: ComponentCreator('/guides/livestream/advanced/configuring-permissions', '4ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/advanced/livestream-any-rtmp',
                component: ComponentCreator('/guides/livestream/advanced/livestream-any-rtmp', '983'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/build-livestream-app',
                component: ComponentCreator('/guides/livestream/build-livestream-app', '03e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup',
                component: ComponentCreator('/guides/livestream/client-setup', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/android',
                component: ComponentCreator('/guides/livestream/client-setup/android', 'e6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/angular',
                component: ComponentCreator('/guides/livestream/client-setup/angular', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/flutter',
                component: ComponentCreator('/guides/livestream/client-setup/flutter', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/ios',
                component: ComponentCreator('/guides/livestream/client-setup/ios', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/javascript',
                component: ComponentCreator('/guides/livestream/client-setup/javascript', '041'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/react',
                component: ComponentCreator('/guides/livestream/client-setup/react', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/concepts',
                component: ComponentCreator('/guides/livestream/concepts', 'b74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/get-started',
                component: ComponentCreator('/guides/livestream/get-started', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/livestream-overview',
                component: ComponentCreator('/guides/livestream/livestream-overview', '50d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/opentok/concept-media-opentok',
                component: ComponentCreator('/guides/migration/opentok/concept-media-opentok', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/opentok/concepts-opentok-vs-dyte',
                component: ComponentCreator('/guides/migration/opentok/concepts-opentok-vs-dyte', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/opentok/opentok-shim-by-dyte',
                component: ComponentCreator('/guides/migration/opentok/opentok-shim-by-dyte', 'ff2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/basics',
                component: ComponentCreator('/guides/migration/twilio/basics', '9e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/compatibility-shim-twilio',
                component: ComponentCreator('/guides/migration/twilio/compatibility-shim-twilio', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/concepts-twilio-vs-dyte',
                component: ComponentCreator('/guides/migration/twilio/concepts-twilio-vs-dyte', 'cbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/feature-comparison',
                component: ComponentCreator('/guides/migration/twilio/feature-comparison', '3c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/media',
                component: ComponentCreator('/guides/migration/twilio/media', '8c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/misc',
                component: ComponentCreator('/guides/migration/twilio/misc', 'b59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/twilio-shim-by-dyte',
                component: ComponentCreator('/guides/migration/twilio/twilio-shim-by-dyte', 'bee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/realtimekit-migration/sdk-guide',
                component: ComponentCreator('/guides/realtimekit-migration/sdk-guide', '28c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/rest-apis/livestream-dyte-meeting',
                component: ComponentCreator('/guides/rest-apis/livestream-dyte-meeting', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/rest-apis/quickstart',
                component: ComponentCreator('/guides/rest-apis/quickstart', 'a62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/v2-migration-guide',
                component: ComponentCreator('/guides/v2-migration-guide', '95f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/build-voice-app',
                component: ComponentCreator('/guides/voice-conf/build-voice-app', '760'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/client-setup',
                component: ComponentCreator('/guides/voice-conf/client-setup', '2aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/client-setup/android',
                component: ComponentCreator('/guides/voice-conf/client-setup/android', 'e13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/client-setup/angular',
                component: ComponentCreator('/guides/voice-conf/client-setup/angular', '013'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/client-setup/flutter',
                component: ComponentCreator('/guides/voice-conf/client-setup/flutter', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/client-setup/ios',
                component: ComponentCreator('/guides/voice-conf/client-setup/ios', '695'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/client-setup/javascript',
                component: ComponentCreator('/guides/voice-conf/client-setup/javascript', '23f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/client-setup/react',
                component: ComponentCreator('/guides/voice-conf/client-setup/react', '238'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/concepts',
                component: ComponentCreator('/guides/voice-conf/concepts', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/get-started',
                component: ComponentCreator('/guides/voice-conf/get-started', 'bf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/intro-voice-conf',
                component: ComponentCreator('/guides/voice-conf/intro-voice-conf', 'f4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/voice-conf/next-steps',
                component: ComponentCreator('/guides/voice-conf/next-steps', '343'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ios-core',
    component: ComponentCreator('/ios-core', '258'),
    routes: [
      {
        path: '/ios-core',
        component: ComponentCreator('/ios-core', '68b'),
        routes: [
          {
            path: '/ios-core/tags',
            component: ComponentCreator('/ios-core/tags', '875'),
            exact: true
          },
          {
            path: '/ios-core/tags/chat',
            component: ComponentCreator('/ios-core/tags/chat', '3f1'),
            exact: true
          },
          {
            path: '/ios-core/tags/create',
            component: ComponentCreator('/ios-core/tags/create', '897'),
            exact: true
          },
          {
            path: '/ios-core/tags/i-os-core',
            component: ComponentCreator('/ios-core/tags/i-os-core', '06e'),
            exact: true
          },
          {
            path: '/ios-core/tags/ios-core',
            component: ComponentCreator('/ios-core/tags/ios-core', '0b1'),
            exact: true
          },
          {
            path: '/ios-core/tags/local-user',
            component: ComponentCreator('/ios-core/tags/local-user', '6c5'),
            exact: true
          },
          {
            path: '/ios-core/tags/local-user-events',
            component: ComponentCreator('/ios-core/tags/local-user-events', 'd22'),
            exact: true
          },
          {
            path: '/ios-core/tags/participants',
            component: ComponentCreator('/ios-core/tags/participants', '0ec'),
            exact: true
          },
          {
            path: '/ios-core/tags/plugins',
            component: ComponentCreator('/ios-core/tags/plugins', '7b6'),
            exact: true
          },
          {
            path: '/ios-core/tags/polls',
            component: ComponentCreator('/ios-core/tags/polls', 'efa'),
            exact: true
          },
          {
            path: '/ios-core/tags/quickstart',
            component: ComponentCreator('/ios-core/tags/quickstart', '2da'),
            exact: true
          },
          {
            path: '/ios-core/tags/recording',
            component: ComponentCreator('/ios-core/tags/recording', '810'),
            exact: true
          },
          {
            path: '/ios-core/tags/releasenotes',
            component: ComponentCreator('/ios-core/tags/releasenotes', '2e1'),
            exact: true
          },
          {
            path: '/ios-core/tags/room-metadata',
            component: ComponentCreator('/ios-core/tags/room-metadata', '9e2'),
            exact: true
          },
          {
            path: '/ios-core/tags/self',
            component: ComponentCreator('/ios-core/tags/self', '3d1'),
            exact: true
          },
          {
            path: '/ios-core/tags/self-events',
            component: ComponentCreator('/ios-core/tags/self-events', 'fa4'),
            exact: true
          },
          {
            path: '/ios-core/tags/setup',
            component: ComponentCreator('/ios-core/tags/setup', '096'),
            exact: true
          },
          {
            path: '/ios-core/tags/stage',
            component: ComponentCreator('/ios-core/tags/stage', '8a3'),
            exact: true
          },
          {
            path: '/ios-core/tags/v-2',
            component: ComponentCreator('/ios-core/tags/v-2', 'be4'),
            exact: true
          },
          {
            path: '/ios-core/tags/votes',
            component: ComponentCreator('/ios-core/tags/votes', '425'),
            exact: true
          },
          {
            path: '/ios-core/tags/waiting-room',
            component: ComponentCreator('/ios-core/tags/waiting-room', 'bd2'),
            exact: true
          },
          {
            path: '/ios-core/tags/waitlisted',
            component: ComponentCreator('/ios-core/tags/waitlisted', '875'),
            exact: true
          },
          {
            path: '/ios-core',
            component: ComponentCreator('/ios-core', 'df2'),
            routes: [
              {
                path: '/ios-core',
                component: ComponentCreator('/ios-core', '44a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/chat/introduction',
                component: ComponentCreator('/ios-core/chat/introduction', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/chat/receiving-chat-messages',
                component: ComponentCreator('/ios-core/chat/receiving-chat-messages', 'b56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/chat/sending-a-chat-message',
                component: ComponentCreator('/ios-core/chat/sending-a-chat-message', 'e10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/error-codes',
                component: ComponentCreator('/ios-core/error-codes', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/Introduction',
                component: ComponentCreator('/ios-core/Introduction', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/livestreaming',
                component: ComponentCreator('/ios-core/livestreaming', '9fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/events',
                component: ComponentCreator('/ios-core/local-user/events', 'b54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/introduction',
                component: ComponentCreator('/ios-core/local-user/introduction', '1ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/manage-media-devices',
                component: ComponentCreator('/ios-core/local-user/manage-media-devices', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/manage-permissions',
                component: ComponentCreator('/ios-core/local-user/manage-permissions', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/screen-share-guide',
                component: ComponentCreator('/ios-core/local-user/screen-share-guide', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants',
                component: ComponentCreator('/ios-core/participants', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants/events',
                component: ComponentCreator('/ios-core/participants/events', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants/participant-object',
                component: ComponentCreator('/ios-core/participants/participant-object', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants/waitlisted-participants',
                component: ComponentCreator('/ios-core/participants/waitlisted-participants', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/disable-plugin',
                component: ComponentCreator('/ios-core/plugins/disable-plugin', '382'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/enable-plugin',
                component: ComponentCreator('/ios-core/plugins/enable-plugin', 'fc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/extra',
                component: ComponentCreator('/ios-core/plugins/extra', 'fd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/introduction',
                component: ComponentCreator('/ios-core/plugins/introduction', '402'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/polls/creating-a-poll',
                component: ComponentCreator('/ios-core/polls/creating-a-poll', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/polls/introduction',
                component: ComponentCreator('/ios-core/polls/introduction', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/polls/voting-on-a-poll',
                component: ComponentCreator('/ios-core/polls/voting-on-a-poll', 'a03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/handling-permissions',
                component: ComponentCreator('/ios-core/pre-call/handling-permissions', 'cb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/media-preview',
                component: ComponentCreator('/ios-core/pre-call/media-preview', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/meeting-meta',
                component: ComponentCreator('/ios-core/pre-call/meeting-meta', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/waiting-room',
                component: ComponentCreator('/ios-core/pre-call/waiting-room', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/recording',
                component: ComponentCreator('/ios-core/recording', '932'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/release-notes',
                component: ComponentCreator('/ios-core/release-notes', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/room-metadata',
                component: ComponentCreator('/ios-core/room-metadata', 'a41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/stage-management/host-controls',
                component: ComponentCreator('/ios-core/stage-management/host-controls', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/stage-management/introduction',
                component: ComponentCreator('/ios-core/stage-management/introduction', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/stage-management/viewer-participants',
                component: ComponentCreator('/ios-core/stage-management/viewer-participants', '5a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/upgrade-v2/breaking-changes-migration',
                component: ComponentCreator('/ios-core/upgrade-v2/breaking-changes-migration', 'bb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/upgrade-v2/introduction',
                component: ComponentCreator('/ios-core/upgrade-v2/introduction', 'd71'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ios',
    component: ComponentCreator('/ios', '39f'),
    routes: [
      {
        path: '/ios',
        component: ComponentCreator('/ios', '873'),
        routes: [
          {
            path: '/ios/tags',
            component: ComponentCreator('/ios/tags', '3bc'),
            exact: true
          },
          {
            path: '/ios/tags/releasenotes',
            component: ComponentCreator('/ios/tags/releasenotes', 'ac0'),
            exact: true
          },
          {
            path: '/ios',
            component: ComponentCreator('/ios', '4f4'),
            routes: [
              {
                path: '/ios',
                component: ComponentCreator('/ios', '834'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/build-pre-call-ui/build-your-own/dyte-setting',
                component: ComponentCreator('/ios/build-pre-call-ui/build-your-own/dyte-setting', 'aa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/build-pre-call-ui/build-your-own/initial-code-skeleton',
                component: ComponentCreator('/ios/build-pre-call-ui/build-your-own/initial-code-skeleton', 'f4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/build-pre-call-ui/default-setup-screen',
                component: ComponentCreator('/ios/build-pre-call-ui/default-setup-screen', '8fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/chat/attachments-in-chat',
                component: ComponentCreator('/ios/chat/attachments-in-chat', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/chat/components-in-chat',
                component: ComponentCreator('/ios/chat/components-in-chat', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/chat/pre-built-chat-screen',
                component: ComponentCreator('/ios/chat/pre-built-chat-screen', 'a19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-active-tab-selector-view',
                component: ComponentCreator('/ios/components/dyte-active-tab-selector-view', '7c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-avatar',
                component: ComponentCreator('/ios/components/dyte-avatar', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-button',
                component: ComponentCreator('/ios/components/dyte-button', '72a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-camera-toggle',
                component: ComponentCreator('/ios/components/dyte-camera-toggle', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-chat',
                component: ComponentCreator('/ios/components/dyte-chat', '55b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-clock',
                component: ComponentCreator('/ios/components/dyte-clock', '8a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-configure-alertview-protocol',
                component: ComponentCreator('/ios/components/dyte-configure-alertview-protocol', '246'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-controlbar-button',
                component: ComponentCreator('/ios/components/dyte-controlbar-button', '11c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-end-meeting',
                component: ComponentCreator('/ios/components/dyte-end-meeting', 'c4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-grid',
                component: ComponentCreator('/ios/components/dyte-grid', '039'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-grid-pagination',
                component: ComponentCreator('/ios/components/dyte-grid-pagination', '82f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-join-stage',
                component: ComponentCreator('/ios/components/dyte-join-stage', '0a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-leave-alert-actions',
                component: ComponentCreator('/ios/components/dyte-leave-alert-actions', 'b1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-leave-meeting-alert',
                component: ComponentCreator('/ios/components/dyte-leave-meeting-alert', '118'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-meeting',
                component: ComponentCreator('/ios/components/dyte-meeting', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-meeting-titlelabel',
                component: ComponentCreator('/ios/components/dyte-meeting-titlelabel', '9bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-mic-toggle',
                component: ComponentCreator('/ios/components/dyte-mic-toggle', '5c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-more-toggle',
                component: ComponentCreator('/ios/components/dyte-more-toggle', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-name-tag',
                component: ComponentCreator('/ios/components/dyte-name-tag', '5f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-navigationbar',
                component: ComponentCreator('/ios/components/dyte-navigationbar', 'a54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-participant-count',
                component: ComponentCreator('/ios/components/dyte-participant-count', 'bfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-participant-tile-view',
                component: ComponentCreator('/ios/components/dyte-participant-tile-view', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-participants',
                component: ComponentCreator('/ios/components/dyte-participants', '85e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-plugin-view',
                component: ComponentCreator('/ios/components/dyte-plugin-view', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-plugins',
                component: ComponentCreator('/ios/components/dyte-plugins', '0b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-pluginScreenShareTab-button',
                component: ComponentCreator('/ios/components/dyte-pluginScreenShareTab-button', 'da1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-poll-form',
                component: ComponentCreator('/ios/components/dyte-poll-form', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-polls',
                component: ComponentCreator('/ios/components/dyte-polls', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-recording-indicator',
                component: ComponentCreator('/ios/components/dyte-recording-indicator', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-settings',
                component: ComponentCreator('/ios/components/dyte-settings', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-setup-screen',
                component: ComponentCreator('/ios/components/dyte-setup-screen', '2c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-setup-screen-delegate',
                component: ComponentCreator('/ios/components/dyte-setup-screen-delegate', '7af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-webinar-stage-toggle',
                component: ComponentCreator('/ios/components/dyte-webinar-stage-toggle', 'f21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/design-system',
                component: ComponentCreator('/ios/design-system', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/events',
                component: ComponentCreator('/ios/events', '232'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/helper-classes/dyte-plugin-view-model',
                component: ComponentCreator('/ios/helper-classes/dyte-plugin-view-model', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/host-controls',
                component: ComponentCreator('/ios/participants/host-controls', '46f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/introduction',
                component: ComponentCreator('/ios/participants/introduction', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/pre-built-participants-screen',
                component: ComponentCreator('/ios/participants/pre-built-participants-screen', '925'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/type-of-participants',
                component: ComponentCreator('/ios/participants/type-of-participants', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Plugins_Guides/load-plugin',
                component: ComponentCreator('/ios/Pre-Built-Plugins_Guides/load-plugin', '6b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Plugins_Guides/Plugins',
                component: ComponentCreator('/ios/Pre-Built-Plugins_Guides/Plugins', '923'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Polls_Guides/Polls',
                component: ComponentCreator('/ios/Pre-Built-Polls_Guides/Polls', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Polls_Guides/prebuilt_polls',
                component: ComponentCreator('/ios/Pre-Built-Polls_Guides/prebuilt_polls', 'a21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Settings_Guides/Settings',
                component: ComponentCreator('/ios/Pre-Built-Settings_Guides/Settings', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/quickstart',
                component: ComponentCreator('/ios/quickstart', '45d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/release-notes',
                component: ComponentCreator('/ios/release-notes', '611'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/rendering-participant-video/build-your-own-grid',
                component: ComponentCreator('/ios/rendering-participant-video/build-your-own-grid', '895'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/rendering-participant-video/using-dyteGrid',
                component: ComponentCreator('/ios/rendering-participant-video/using-dyteGrid', '28b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-sdk',
    component: ComponentCreator('/plugin-sdk', '46e'),
    routes: [
      {
        path: '/plugin-sdk',
        component: ComponentCreator('/plugin-sdk', '4a6'),
        routes: [
          {
            path: '/plugin-sdk/tags',
            component: ComponentCreator('/plugin-sdk/tags', '32f'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/installation',
            component: ComponentCreator('/plugin-sdk/tags/installation', 'e0a'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/plugin-sdk',
            component: ComponentCreator('/plugin-sdk/tags/plugin-sdk', 'e8a'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/quickstart',
            component: ComponentCreator('/plugin-sdk/tags/quickstart', '54f'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/setup',
            component: ComponentCreator('/plugin-sdk/tags/setup', '05c'),
            exact: true
          },
          {
            path: '/plugin-sdk',
            component: ComponentCreator('/plugin-sdk', '884'),
            routes: [
              {
                path: '/plugin-sdk',
                component: ComponentCreator('/plugin-sdk', '611'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/frequently-asked-questions',
                component: ComponentCreator('/plugin-sdk/frequently-asked-questions', '601'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/guides/exchange-data-between-plugin-and-meeting',
                component: ComponentCreator('/plugin-sdk/guides/exchange-data-between-plugin-and-meeting', '6b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/guides/how-to-work-with-plugin-stores',
                component: ComponentCreator('/plugin-sdk/guides/how-to-work-with-plugin-stores', '4d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/quickstart',
                component: ComponentCreator('/plugin-sdk/quickstart', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/create',
                component: ComponentCreator('/plugin-sdk/setup/create', '8f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/customize',
                component: ComponentCreator('/plugin-sdk/setup/customize', '220'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/develop',
                component: ComponentCreator('/plugin-sdk/setup/develop', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/manage',
                component: ComponentCreator('/plugin-sdk/setup/manage', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/publish',
                component: ComponentCreator('/plugin-sdk/setup/publish', 'b40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/basic/events',
                component: ComponentCreator('/plugin-sdk/usage/basic/events', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/basic/initialize',
                component: ComponentCreator('/plugin-sdk/usage/basic/initialize', '4d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/basic/methods',
                component: ComponentCreator('/plugin-sdk/usage/basic/methods', '614'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/installation',
                component: ComponentCreator('/plugin-sdk/usage/installation', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/rooms-api/events',
                component: ComponentCreator('/plugin-sdk/usage/rooms-api/events', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/rooms-api/methods',
                component: ComponentCreator('/plugin-sdk/usage/rooms-api/methods', 'e2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/stores-api/introduction',
                component: ComponentCreator('/plugin-sdk/usage/stores-api/introduction', '7ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/stores-api/manage-stores',
                component: ComponentCreator('/plugin-sdk/usage/stores-api/manage-stores', '3ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-native',
    component: ComponentCreator('/react-native', '1a9'),
    routes: [
      {
        path: '/react-native',
        component: ComponentCreator('/react-native', '76b'),
        routes: [
          {
            path: '/react-native/tags',
            component: ComponentCreator('/react-native/tags', '397'),
            exact: true
          },
          {
            path: '/react-native/tags/releasenotes',
            component: ComponentCreator('/react-native/tags/releasenotes', 'fd1'),
            exact: true
          },
          {
            path: '/react-native',
            component: ComponentCreator('/react-native', 'a26'),
            routes: [
              {
                path: '/react-native',
                component: ComponentCreator('/react-native', '58f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/basics/display-videos',
                component: ComponentCreator('/react-native/basics/display-videos', 'e09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/basics/integrate',
                component: ComponentCreator('/react-native/basics/integrate', '60e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-in-call-ui/build-your-own/add-custom-sidebar',
                component: ComponentCreator('/react-native/build-in-call-ui/build-your-own/add-custom-sidebar', 'b19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-in-call-ui/build-your-own/customize-control-bar',
                component: ComponentCreator('/react-native/build-in-call-ui/build-your-own/customize-control-bar', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-in-call-ui/build-your-own/customize-header',
                component: ComponentCreator('/react-native/build-in-call-ui/build-your-own/customize-header', '3ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-in-call-ui/build-your-own/handling-states-and-configs',
                component: ComponentCreator('/react-native/build-in-call-ui/build-your-own/handling-states-and-configs', 'a49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-in-call-ui/build-your-own/states based UI Split',
                component: ComponentCreator('/react-native/build-in-call-ui/build-your-own/states based UI Split', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-in-call-ui/default-meeting-ui',
                component: ComponentCreator('/react-native/build-in-call-ui/default-meeting-ui', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-pre-call-ui/build-your-own/add-audio-video-device',
                component: ComponentCreator('/react-native/build-pre-call-ui/build-your-own/add-audio-video-device', '01f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-pre-call-ui/build-your-own/add-audio-video-preview',
                component: ComponentCreator('/react-native/build-pre-call-ui/build-your-own/add-audio-video-preview', 'ad2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-pre-call-ui/build-your-own/edit-user-name',
                component: ComponentCreator('/react-native/build-pre-call-ui/build-your-own/edit-user-name', '4b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-pre-call-ui/build-your-own/initial-code-skeleton',
                component: ComponentCreator('/react-native/build-pre-call-ui/build-your-own/initial-code-skeleton', '205'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/build-pre-call-ui/default-setup-screen',
                component: ComponentCreator('/react-native/build-pre-call-ui/default-setup-screen', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components',
                component: ComponentCreator('/react-native/components', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-avatar',
                component: ComponentCreator('/react-native/components/dyte-avatar', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-button',
                component: ComponentCreator('/react-native/components/dyte-button', '5e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-camera-toggle',
                component: ComponentCreator('/react-native/components/dyte-camera-toggle', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-chat',
                component: ComponentCreator('/react-native/components/dyte-chat', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-chat-toggle',
                component: ComponentCreator('/react-native/components/dyte-chat-toggle', '8c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-clock',
                component: ComponentCreator('/react-native/components/dyte-clock', '3d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-controlbar',
                component: ComponentCreator('/react-native/components/dyte-controlbar', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-controlbar-button',
                component: ComponentCreator('/react-native/components/dyte-controlbar-button', '751'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-dialog',
                component: ComponentCreator('/react-native/components/dyte-dialog', '104'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-dialog-manager',
                component: ComponentCreator('/react-native/components/dyte-dialog-manager', 'df7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-ended-screen',
                component: ComponentCreator('/react-native/components/dyte-ended-screen', 'f7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-file-message',
                component: ComponentCreator('/react-native/components/dyte-file-message', '226'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-grid',
                component: ComponentCreator('/react-native/components/dyte-grid', 'c6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-grid-pagination',
                component: ComponentCreator('/react-native/components/dyte-grid-pagination', '9e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-header',
                component: ComponentCreator('/react-native/components/dyte-header', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-icon',
                component: ComponentCreator('/react-native/components/dyte-icon', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-idle-screen',
                component: ComponentCreator('/react-native/components/dyte-idle-screen', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-image-message',
                component: ComponentCreator('/react-native/components/dyte-image-message', '81f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-image-viewer',
                component: ComponentCreator('/react-native/components/dyte-image-viewer', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-join-stage',
                component: ComponentCreator('/react-native/components/dyte-join-stage', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-leave-button',
                component: ComponentCreator('/react-native/components/dyte-leave-button', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-leave-meeting',
                component: ComponentCreator('/react-native/components/dyte-leave-meeting', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-logo',
                component: ComponentCreator('/react-native/components/dyte-logo', '68d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-meeting',
                component: ComponentCreator('/react-native/components/dyte-meeting', '6ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-meeting-title',
                component: ComponentCreator('/react-native/components/dyte-meeting-title', 'bfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-menu',
                component: ComponentCreator('/react-native/components/dyte-menu', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-menu-item',
                component: ComponentCreator('/react-native/components/dyte-menu-item', '67f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-menu-list',
                component: ComponentCreator('/react-native/components/dyte-menu-list', 'cf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-mic-toggle',
                component: ComponentCreator('/react-native/components/dyte-mic-toggle', 'd54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-more-toggle',
                component: ComponentCreator('/react-native/components/dyte-more-toggle', '12d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-mute-all-button',
                component: ComponentCreator('/react-native/components/dyte-mute-all-button', 'ff9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-name-tag',
                component: ComponentCreator('/react-native/components/dyte-name-tag', '60c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-notification',
                component: ComponentCreator('/react-native/components/dyte-notification', 'fa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-notifications',
                component: ComponentCreator('/react-native/components/dyte-notifications', '46d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participant',
                component: ComponentCreator('/react-native/components/dyte-participant', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participant-count',
                component: ComponentCreator('/react-native/components/dyte-participant-count', 'caa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participant-tile',
                component: ComponentCreator('/react-native/components/dyte-participant-tile', '318'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participants',
                component: ComponentCreator('/react-native/components/dyte-participants', 'c38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participants-toggle',
                component: ComponentCreator('/react-native/components/dyte-participants-toggle', 'c68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-permissions-message',
                component: ComponentCreator('/react-native/components/dyte-permissions-message', '790'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-plugin-main',
                component: ComponentCreator('/react-native/components/dyte-plugin-main', '118'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-plugins',
                component: ComponentCreator('/react-native/components/dyte-plugins', '988'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-plugins-toggle',
                component: ComponentCreator('/react-native/components/dyte-plugins-toggle', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-poll',
                component: ComponentCreator('/react-native/components/dyte-poll', '502'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-poll-form',
                component: ComponentCreator('/react-native/components/dyte-poll-form', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-polls',
                component: ComponentCreator('/react-native/components/dyte-polls', '89b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-polls-toggle',
                component: ComponentCreator('/react-native/components/dyte-polls-toggle', '3f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-recording-indicator',
                component: ComponentCreator('/react-native/components/dyte-recording-indicator', '00a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-recording-toggle',
                component: ComponentCreator('/react-native/components/dyte-recording-toggle', '4b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-screen-share-toggle',
                component: ComponentCreator('/react-native/components/dyte-screen-share-toggle', '9ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-screenshare-view',
                component: ComponentCreator('/react-native/components/dyte-screenshare-view', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings',
                component: ComponentCreator('/react-native/components/dyte-settings', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings-audio',
                component: ComponentCreator('/react-native/components/dyte-settings-audio', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings-toggle',
                component: ComponentCreator('/react-native/components/dyte-settings-toggle', 'f70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings-video',
                component: ComponentCreator('/react-native/components/dyte-settings-video', '897'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-setup-screen',
                component: ComponentCreator('/react-native/components/dyte-setup-screen', '84d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-sidebar',
                component: ComponentCreator('/react-native/components/dyte-sidebar', 'fa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-simple-grid',
                component: ComponentCreator('/react-native/components/dyte-simple-grid', '5f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-spinner',
                component: ComponentCreator('/react-native/components/dyte-spinner', '7e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-spotlight-grid',
                component: ComponentCreator('/react-native/components/dyte-spotlight-grid', '57f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-text',
                component: ComponentCreator('/react-native/components/dyte-text', '5cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-text-field',
                component: ComponentCreator('/react-native/components/dyte-text-field', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-waiting-screen',
                component: ComponentCreator('/react-native/components/dyte-waiting-screen', '431'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-webinar-stage-toggle',
                component: ComponentCreator('/react-native/components/dyte-webinar-stage-toggle', '971'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/customizations/custom-iconpack',
                component: ComponentCreator('/react-native/customizations/custom-iconpack', '918'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/customizations/custom-locale',
                component: ComponentCreator('/react-native/customizations/custom-locale', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/design-system',
                component: ComponentCreator('/react-native/design-system', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/quickstart',
                component: ComponentCreator('/react-native/quickstart', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference',
                component: ComponentCreator('/react-native/reference', 'a04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/react-native/reference/classes/DyteNotificationsAudio', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/Notification',
                component: ComponentCreator('/react-native/reference/interfaces/Notification', 'e5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/PollObject',
                component: ComponentCreator('/react-native/reference/interfaces/PollObject', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/States',
                component: ComponentCreator('/react-native/reference/interfaces/States', '202'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/UIConfig',
                component: ComponentCreator('/react-native/reference/interfaces/UIConfig', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/UserPreferences',
                component: ComponentCreator('/react-native/reference/interfaces/UserPreferences', '973'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/release-notes',
                component: ComponentCreator('/react-native/release-notes', '133'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/using-hooks',
                component: ComponentCreator('/react-native/using-hooks', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-ui-kit',
    component: ComponentCreator('/react-ui-kit', 'c3f'),
    routes: [
      {
        path: '/react-ui-kit',
        component: ComponentCreator('/react-ui-kit', 'ea9'),
        routes: [
          {
            path: '/react-ui-kit/tags',
            component: ComponentCreator('/react-ui-kit/tags', '953'),
            exact: true
          },
          {
            path: '/react-ui-kit/tags/releasenotes',
            component: ComponentCreator('/react-ui-kit/tags/releasenotes', '3c0'),
            exact: true
          },
          {
            path: '/react-ui-kit',
            component: ComponentCreator('/react-ui-kit', '9d4'),
            routes: [
              {
                path: '/react-ui-kit',
                component: ComponentCreator('/react-ui-kit', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/basics/display-videos',
                component: ComponentCreator('/react-ui-kit/basics/display-videos', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/basics/integrate',
                component: ComponentCreator('/react-ui-kit/basics/integrate', '4a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/add-custom-sidebar',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/add-custom-sidebar', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar', '662'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/customize-header',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/customize-header', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/handling-states-and-configs',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/handling-states-and-configs', '2d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/states-based-ui-split',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/states-based-ui-split', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/default-meeting-ui',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/default-meeting-ui', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device', '9fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name', '16c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton', '90e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/default-setup-screen',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/default-setup-screen', 'a2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components',
                component: ComponentCreator('/react-ui-kit/components', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-audio-visualizer',
                component: ComponentCreator('/react-ui-kit/components/dyte-audio-visualizer', 'aca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-avatar',
                component: ComponentCreator('/react-ui-kit/components/dyte-avatar', 'e91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-button',
                component: ComponentCreator('/react-ui-kit/components/dyte-button', 'd33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-camera-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-camera-toggle', '969'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-chat',
                component: ComponentCreator('/react-ui-kit/components/dyte-chat', '632'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-chat-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-chat-toggle', '264'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-clock',
                component: ComponentCreator('/react-ui-kit/components/dyte-clock', 'f15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-confirmation-modal',
                component: ComponentCreator('/react-ui-kit/components/dyte-confirmation-modal', '69c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-controlbar',
                component: ComponentCreator('/react-ui-kit/components/dyte-controlbar', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-controlbar-button',
                component: ComponentCreator('/react-ui-kit/components/dyte-controlbar-button', 'bc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-dialog',
                component: ComponentCreator('/react-ui-kit/components/dyte-dialog', 'ffc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-dialog-manager',
                component: ComponentCreator('/react-ui-kit/components/dyte-dialog-manager', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-emoji-picker',
                component: ComponentCreator('/react-ui-kit/components/dyte-emoji-picker', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-ended-screen',
                component: ComponentCreator('/react-ui-kit/components/dyte-ended-screen', '114'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-file-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-file-message', 'c74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-fullscreen-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-fullscreen-toggle', '6c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-grid', '51a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-grid-pagination',
                component: ComponentCreator('/react-ui-kit/components/dyte-grid-pagination', '3bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-header',
                component: ComponentCreator('/react-ui-kit/components/dyte-header', '2c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-icon',
                component: ComponentCreator('/react-ui-kit/components/dyte-icon', '49d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-idle-screen',
                component: ComponentCreator('/react-ui-kit/components/dyte-idle-screen', '8c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-image-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-image-message', '0cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-image-viewer',
                component: ComponentCreator('/react-ui-kit/components/dyte-image-viewer', '7d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-leave-button',
                component: ComponentCreator('/react-ui-kit/components/dyte-leave-button', '7a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-leave-meeting',
                component: ComponentCreator('/react-ui-kit/components/dyte-leave-meeting', '9af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-logo',
                component: ComponentCreator('/react-ui-kit/components/dyte-logo', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-meeting',
                component: ComponentCreator('/react-ui-kit/components/dyte-meeting', '5b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-meeting-title',
                component: ComponentCreator('/react-ui-kit/components/dyte-meeting-title', '6f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-menu',
                component: ComponentCreator('/react-ui-kit/components/dyte-menu', 'ed0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-menu-item',
                component: ComponentCreator('/react-ui-kit/components/dyte-menu-item', 'ba2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-menu-list',
                component: ComponentCreator('/react-ui-kit/components/dyte-menu-list', 'a36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-mic-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-mic-toggle', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-mixed-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-mixed-grid', '8d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-more-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-more-toggle', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-name-tag',
                component: ComponentCreator('/react-ui-kit/components/dyte-name-tag', '0a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-network-indicator',
                component: ComponentCreator('/react-ui-kit/components/dyte-network-indicator', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-notification',
                component: ComponentCreator('/react-ui-kit/components/dyte-notification', '51e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-notifications',
                component: ComponentCreator('/react-ui-kit/components/dyte-notifications', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-overlay-modal',
                component: ComponentCreator('/react-ui-kit/components/dyte-overlay-modal', 'eb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participant',
                component: ComponentCreator('/react-ui-kit/components/dyte-participant', '87b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participant-count',
                component: ComponentCreator('/react-ui-kit/components/dyte-participant-count', '151'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participant-tile',
                component: ComponentCreator('/react-ui-kit/components/dyte-participant-tile', 'd7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants-audio',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants-audio', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants-stage-list',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants-stage-list', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants-toggle', 'ad4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-permissions-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-permissions-message', '41d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-plugin-main',
                component: ComponentCreator('/react-ui-kit/components/dyte-plugin-main', '94e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-plugins',
                component: ComponentCreator('/react-ui-kit/components/dyte-plugins', '25f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-plugins-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-plugins-toggle', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-poll',
                component: ComponentCreator('/react-ui-kit/components/dyte-poll', 'ef4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-poll-form',
                component: ComponentCreator('/react-ui-kit/components/dyte-poll-form', 'fa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-polls',
                component: ComponentCreator('/react-ui-kit/components/dyte-polls', '129'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-polls-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-polls-toggle', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-recording-indicator',
                component: ComponentCreator('/react-ui-kit/components/dyte-recording-indicator', '1ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-recording-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-recording-toggle', 'c83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-remote-access-manager',
                component: ComponentCreator('/react-ui-kit/components/dyte-remote-access-manager', '337'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-screen-share-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-screen-share-toggle', 'f38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-screenshare-view',
                component: ComponentCreator('/react-ui-kit/components/dyte-screenshare-view', 'ae8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings', 'a06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings-audio',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings-audio', '68c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings-toggle', '90e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings-video',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings-video', 'aa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-setup-screen',
                component: ComponentCreator('/react-ui-kit/components/dyte-setup-screen', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-sidebar',
                component: ComponentCreator('/react-ui-kit/components/dyte-sidebar', '387'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-simple-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-simple-grid', '7d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-spinner',
                component: ComponentCreator('/react-ui-kit/components/dyte-spinner', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-spotlight-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-spotlight-grid', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-stage',
                component: ComponentCreator('/react-ui-kit/components/dyte-stage', '3f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-switch',
                component: ComponentCreator('/react-ui-kit/components/dyte-switch', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-text-field',
                component: ComponentCreator('/react-ui-kit/components/dyte-text-field', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-text-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-text-message', 'c31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-tooltip',
                component: ComponentCreator('/react-ui-kit/components/dyte-tooltip', '30e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-viewer-count',
                component: ComponentCreator('/react-ui-kit/components/dyte-viewer-count', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/customizations/custom-iconpack',
                component: ComponentCreator('/react-ui-kit/customizations/custom-iconpack', 'e37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/customizations/custom-locale',
                component: ComponentCreator('/react-ui-kit/customizations/custom-locale', '7d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/design-system',
                component: ComponentCreator('/react-ui-kit/design-system', 'f34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/quickstart',
                component: ComponentCreator('/react-ui-kit/quickstart', '876'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference',
                component: ComponentCreator('/react-ui-kit/reference', 'a87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/react-ui-kit/reference/classes/DyteNotificationsAudio', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/Notification',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/Notification', '0f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/PollObject',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/PollObject', '729'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/States',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/States', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/UIConfig',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/UIConfig', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/UserPreferences',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/UserPreferences', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/release-notes',
                component: ComponentCreator('/react-ui-kit/release-notes', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/using-hooks',
                component: ComponentCreator('/react-ui-kit/using-hooks', 'b5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-web-core',
    component: ComponentCreator('/react-web-core', 'c7f'),
    routes: [
      {
        path: '/react-web-core',
        component: ComponentCreator('/react-web-core', '55c'),
        routes: [
          {
            path: '/react-web-core/tags',
            component: ComponentCreator('/react-web-core/tags', '78c'),
            exact: true
          },
          {
            path: '/react-web-core/tags/chat',
            component: ComponentCreator('/react-web-core/tags/chat', '400'),
            exact: true
          },
          {
            path: '/react-web-core/tags/create',
            component: ComponentCreator('/react-web-core/tags/create', '54c'),
            exact: true
          },
          {
            path: '/react-web-core/tags/local-user',
            component: ComponentCreator('/react-web-core/tags/local-user', '0f5'),
            exact: true
          },
          {
            path: '/react-web-core/tags/methods',
            component: ComponentCreator('/react-web-core/tags/methods', '975'),
            exact: true
          },
          {
            path: '/react-web-core/tags/participant',
            component: ComponentCreator('/react-web-core/tags/participant', '5c6'),
            exact: true
          },
          {
            path: '/react-web-core/tags/participants',
            component: ComponentCreator('/react-web-core/tags/participants', 'f7a'),
            exact: true
          },
          {
            path: '/react-web-core/tags/plugins',
            component: ComponentCreator('/react-web-core/tags/plugins', '24e'),
            exact: true
          },
          {
            path: '/react-web-core/tags/polls',
            component: ComponentCreator('/react-web-core/tags/polls', 'b0e'),
            exact: true
          },
          {
            path: '/react-web-core/tags/react-web-core',
            component: ComponentCreator('/react-web-core/tags/react-web-core', 'df9'),
            exact: true
          },
          {
            path: '/react-web-core/tags/recording',
            component: ComponentCreator('/react-web-core/tags/recording', '862'),
            exact: true
          },
          {
            path: '/react-web-core/tags/releasenotes',
            component: ComponentCreator('/react-web-core/tags/releasenotes', '4bd'),
            exact: true
          },
          {
            path: '/react-web-core/tags/results',
            component: ComponentCreator('/react-web-core/tags/results', 'fa5'),
            exact: true
          },
          {
            path: '/react-web-core/tags/room-metadata',
            component: ComponentCreator('/react-web-core/tags/room-metadata', '7c6'),
            exact: true
          },
          {
            path: '/react-web-core/tags/self',
            component: ComponentCreator('/react-web-core/tags/self', '03a'),
            exact: true
          },
          {
            path: '/react-web-core/tags/self-events',
            component: ComponentCreator('/react-web-core/tags/self-events', '057'),
            exact: true
          },
          {
            path: '/react-web-core/tags/updates',
            component: ComponentCreator('/react-web-core/tags/updates', '60b'),
            exact: true
          },
          {
            path: '/react-web-core/tags/votes',
            component: ComponentCreator('/react-web-core/tags/votes', 'cea'),
            exact: true
          },
          {
            path: '/react-web-core/tags/web-core',
            component: ComponentCreator('/react-web-core/tags/web-core', '30d'),
            exact: true
          },
          {
            path: '/react-web-core',
            component: ComponentCreator('/react-web-core', '5ff'),
            routes: [
              {
                path: '/react-web-core',
                component: ComponentCreator('/react-web-core', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/advanced/advance',
                component: ComponentCreator('/react-web-core/advanced/advance', '3a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/edit-chat-messages',
                component: ComponentCreator('/react-web-core/chat/edit-chat-messages', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/introduction',
                component: ComponentCreator('/react-web-core/chat/introduction', 'e27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/other-chat-functions',
                component: ComponentCreator('/react-web-core/chat/other-chat-functions', 'a6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/receiving-chat-messages',
                component: ComponentCreator('/react-web-core/chat/receiving-chat-messages', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/sending-a-chat-message',
                component: ComponentCreator('/react-web-core/chat/sending-a-chat-message', '3b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/error-codes/error-code',
                component: ComponentCreator('/react-web-core/error-codes/error-code', 'c88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/error-codes/error-code-zero-ten',
                component: ComponentCreator('/react-web-core/error-codes/error-code-zero-ten', 'fed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/introduction',
                component: ComponentCreator('/react-web-core/introduction', '0e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/livestreaming',
                component: ComponentCreator('/react-web-core/livestreaming', 'c81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/events',
                component: ComponentCreator('/react-web-core/local-user/events', '056'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/extras',
                component: ComponentCreator('/react-web-core/local-user/extras', '109'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/introduction',
                component: ComponentCreator('/react-web-core/local-user/introduction', '79a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/manage-media-devices',
                component: ComponentCreator('/react-web-core/local-user/manage-media-devices', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/media-permission-errors',
                component: ComponentCreator('/react-web-core/local-user/media-permission-errors', 'd19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants',
                component: ComponentCreator('/react-web-core/participants', '4f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/events',
                component: ComponentCreator('/react-web-core/participants/events', 'dcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/participant-object',
                component: ComponentCreator('/react-web-core/participants/participant-object', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/permissions',
                component: ComponentCreator('/react-web-core/participants/permissions', 'b96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/pip',
                component: ComponentCreator('/react-web-core/participants/pip', '049'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/disable-plugin',
                component: ComponentCreator('/react-web-core/plugins/disable-plugin', 'bdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/enable-plugin',
                component: ComponentCreator('/react-web-core/plugins/enable-plugin', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/extra',
                component: ComponentCreator('/react-web-core/plugins/extra', 'ca6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/introduction',
                component: ComponentCreator('/react-web-core/plugins/introduction', '25d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/creating-a-poll',
                component: ComponentCreator('/react-web-core/polls/creating-a-poll', 'f22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/introduction',
                component: ComponentCreator('/react-web-core/polls/introduction', '0e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/other-poll-functions',
                component: ComponentCreator('/react-web-core/polls/other-poll-functions', 'a45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/voting-on-a-poll',
                component: ComponentCreator('/react-web-core/polls/voting-on-a-poll', '3e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/handling-permissions',
                component: ComponentCreator('/react-web-core/pre-call/handling-permissions', '55b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/media-preview',
                component: ComponentCreator('/react-web-core/pre-call/media-preview', 'ac8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/meeting-meta',
                component: ComponentCreator('/react-web-core/pre-call/meeting-meta', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/virtual-bg',
                component: ComponentCreator('/react-web-core/pre-call/virtual-bg', 'af9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/waiting-room',
                component: ComponentCreator('/react-web-core/pre-call/waiting-room', '08b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/recording',
                component: ComponentCreator('/react-web-core/recording', '99c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteAi',
                component: ComponentCreator('/react-web-core/reference/DyteAi', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteChat',
                component: ComponentCreator('/react-web-core/reference/DyteChat', '262'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteClient',
                component: ComponentCreator('/react-web-core/reference/DyteClient', 'cc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteConnectedMeetings',
                component: ComponentCreator('/react-web-core/reference/DyteConnectedMeetings', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteLivestream',
                component: ComponentCreator('/react-web-core/reference/DyteLivestream', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteMeta',
                component: ComponentCreator('/react-web-core/reference/DyteMeta', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteParticipant',
                component: ComponentCreator('/react-web-core/reference/DyteParticipant', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteParticipantMap',
                component: ComponentCreator('/react-web-core/reference/DyteParticipantMap', '6f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteParticipants',
                component: ComponentCreator('/react-web-core/reference/DyteParticipants', 'ef4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePermissionsPreset',
                component: ComponentCreator('/react-web-core/reference/DytePermissionsPreset', 'a35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePlugin',
                component: ComponentCreator('/react-web-core/reference/DytePlugin', '7f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePluginMap',
                component: ComponentCreator('/react-web-core/reference/DytePluginMap', '6b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePlugins',
                component: ComponentCreator('/react-web-core/reference/DytePlugins', '78b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePolls',
                component: ComponentCreator('/react-web-core/reference/DytePolls', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteRecording',
                component: ComponentCreator('/react-web-core/reference/DyteRecording', 'df5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteRemote',
                component: ComponentCreator('/react-web-core/reference/DyteRemote', '283'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteSelf',
                component: ComponentCreator('/react-web-core/reference/DyteSelf', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteSelfMedia',
                component: ComponentCreator('/react-web-core/reference/DyteSelfMedia', '8b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteStage',
                component: ComponentCreator('/react-web-core/reference/DyteStage', 'd11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteThemePreset',
                component: ComponentCreator('/react-web-core/reference/DyteThemePreset', '29c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/release-notes',
                component: ComponentCreator('/react-web-core/release-notes', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/room-metadata',
                component: ComponentCreator('/react-web-core/room-metadata', 'acc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/stage',
                component: ComponentCreator('/react-web-core/stage', 'd4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/upgrade',
                component: ComponentCreator('/react-web-core/upgrade', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/rn-core',
    component: ComponentCreator('/rn-core', '1f6'),
    routes: [
      {
        path: '/rn-core',
        component: ComponentCreator('/rn-core', 'd34'),
        routes: [
          {
            path: '/rn-core/tags',
            component: ComponentCreator('/rn-core/tags', 'c63'),
            exact: true
          },
          {
            path: '/rn-core/tags/chat',
            component: ComponentCreator('/rn-core/tags/chat', '11d'),
            exact: true
          },
          {
            path: '/rn-core/tags/create',
            component: ComponentCreator('/rn-core/tags/create', '5b1'),
            exact: true
          },
          {
            path: '/rn-core/tags/installation',
            component: ComponentCreator('/rn-core/tags/installation', '240'),
            exact: true
          },
          {
            path: '/rn-core/tags/local-user',
            component: ComponentCreator('/rn-core/tags/local-user', '75b'),
            exact: true
          },
          {
            path: '/rn-core/tags/methods',
            component: ComponentCreator('/rn-core/tags/methods', 'f79'),
            exact: true
          },
          {
            path: '/rn-core/tags/participant',
            component: ComponentCreator('/rn-core/tags/participant', '591'),
            exact: true
          },
          {
            path: '/rn-core/tags/participants',
            component: ComponentCreator('/rn-core/tags/participants', '2b8'),
            exact: true
          },
          {
            path: '/rn-core/tags/plugins',
            component: ComponentCreator('/rn-core/tags/plugins', '181'),
            exact: true
          },
          {
            path: '/rn-core/tags/polls',
            component: ComponentCreator('/rn-core/tags/polls', '434'),
            exact: true
          },
          {
            path: '/rn-core/tags/quickstart',
            component: ComponentCreator('/rn-core/tags/quickstart', '6cf'),
            exact: true
          },
          {
            path: '/rn-core/tags/recording',
            component: ComponentCreator('/rn-core/tags/recording', '36a'),
            exact: true
          },
          {
            path: '/rn-core/tags/releasenotes',
            component: ComponentCreator('/rn-core/tags/releasenotes', '6ca'),
            exact: true
          },
          {
            path: '/rn-core/tags/results',
            component: ComponentCreator('/rn-core/tags/results', '229'),
            exact: true
          },
          {
            path: '/rn-core/tags/rn-core',
            component: ComponentCreator('/rn-core/tags/rn-core', '7f4'),
            exact: true
          },
          {
            path: '/rn-core/tags/room-metadata',
            component: ComponentCreator('/rn-core/tags/room-metadata', 'eb7'),
            exact: true
          },
          {
            path: '/rn-core/tags/self',
            component: ComponentCreator('/rn-core/tags/self', '8e0'),
            exact: true
          },
          {
            path: '/rn-core/tags/self-events',
            component: ComponentCreator('/rn-core/tags/self-events', 'eb2'),
            exact: true
          },
          {
            path: '/rn-core/tags/setup',
            component: ComponentCreator('/rn-core/tags/setup', 'efd'),
            exact: true
          },
          {
            path: '/rn-core/tags/updates',
            component: ComponentCreator('/rn-core/tags/updates', '326'),
            exact: true
          },
          {
            path: '/rn-core/tags/votes',
            component: ComponentCreator('/rn-core/tags/votes', 'acb'),
            exact: true
          },
          {
            path: '/rn-core/tags/web-core',
            component: ComponentCreator('/rn-core/tags/web-core', '3fe'),
            exact: true
          },
          {
            path: '/rn-core',
            component: ComponentCreator('/rn-core', '84b'),
            routes: [
              {
                path: '/rn-core',
                component: ComponentCreator('/rn-core', '708'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/edit-chat-messages',
                component: ComponentCreator('/rn-core/chat/edit-chat-messages', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/introduction',
                component: ComponentCreator('/rn-core/chat/introduction', 'e0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/other-chat-functions',
                component: ComponentCreator('/rn-core/chat/other-chat-functions', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/receiving-chat-messages',
                component: ComponentCreator('/rn-core/chat/receiving-chat-messages', '15a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/sending-a-chat-message',
                component: ComponentCreator('/rn-core/chat/sending-a-chat-message', '80b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/error-codes/error-code',
                component: ComponentCreator('/rn-core/error-codes/error-code', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/error-codes/error-code-zero-ten',
                component: ComponentCreator('/rn-core/error-codes/error-code-zero-ten', '8d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/livestreaming',
                component: ComponentCreator('/rn-core/livestreaming', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/events',
                component: ComponentCreator('/rn-core/local-user/events', 'e0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/extras',
                component: ComponentCreator('/rn-core/local-user/extras', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/introduction',
                component: ComponentCreator('/rn-core/local-user/introduction', 'b18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/manage-media-devices',
                component: ComponentCreator('/rn-core/local-user/manage-media-devices', 'd6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/media-permission-errors',
                component: ComponentCreator('/rn-core/local-user/media-permission-errors', '9da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants',
                component: ComponentCreator('/rn-core/participants', 'dc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants/events',
                component: ComponentCreator('/rn-core/participants/events', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants/participant-object',
                component: ComponentCreator('/rn-core/participants/participant-object', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants/permissions',
                component: ComponentCreator('/rn-core/participants/permissions', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/disable-plugin',
                component: ComponentCreator('/rn-core/plugins/disable-plugin', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/enable-plugin',
                component: ComponentCreator('/rn-core/plugins/enable-plugin', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/extra',
                component: ComponentCreator('/rn-core/plugins/extra', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/introduction',
                component: ComponentCreator('/rn-core/plugins/introduction', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/creating-a-poll',
                component: ComponentCreator('/rn-core/polls/creating-a-poll', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/introduction',
                component: ComponentCreator('/rn-core/polls/introduction', '324'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/other-poll-functions',
                component: ComponentCreator('/rn-core/polls/other-poll-functions', '1a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/voting-on-a-poll',
                component: ComponentCreator('/rn-core/polls/voting-on-a-poll', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/handling-permissions',
                component: ComponentCreator('/rn-core/pre-call/handling-permissions', 'a76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/media-preview',
                component: ComponentCreator('/rn-core/pre-call/media-preview', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/meeting-meta',
                component: ComponentCreator('/rn-core/pre-call/meeting-meta', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/waiting-room',
                component: ComponentCreator('/rn-core/pre-call/waiting-room', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/quickstart',
                component: ComponentCreator('/rn-core/quickstart', '047'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/recording',
                component: ComponentCreator('/rn-core/recording', '5c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteAi',
                component: ComponentCreator('/rn-core/reference/DyteAi', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteChat',
                component: ComponentCreator('/rn-core/reference/DyteChat', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteClient',
                component: ComponentCreator('/rn-core/reference/DyteClient', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteConnectedMeetings',
                component: ComponentCreator('/rn-core/reference/DyteConnectedMeetings', '96b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteLivestream',
                component: ComponentCreator('/rn-core/reference/DyteLivestream', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteMeta',
                component: ComponentCreator('/rn-core/reference/DyteMeta', '1a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteParticipant',
                component: ComponentCreator('/rn-core/reference/DyteParticipant', '08a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteParticipantMap',
                component: ComponentCreator('/rn-core/reference/DyteParticipantMap', 'bb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteParticipants',
                component: ComponentCreator('/rn-core/reference/DyteParticipants', '1ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePermissionsPreset',
                component: ComponentCreator('/rn-core/reference/DytePermissionsPreset', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePlugin',
                component: ComponentCreator('/rn-core/reference/DytePlugin', '146'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePluginMap',
                component: ComponentCreator('/rn-core/reference/DytePluginMap', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePlugins',
                component: ComponentCreator('/rn-core/reference/DytePlugins', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePolls',
                component: ComponentCreator('/rn-core/reference/DytePolls', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteRecording',
                component: ComponentCreator('/rn-core/reference/DyteRecording', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteRemote',
                component: ComponentCreator('/rn-core/reference/DyteRemote', '152'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteSelf',
                component: ComponentCreator('/rn-core/reference/DyteSelf', '849'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteSelfMedia',
                component: ComponentCreator('/rn-core/reference/DyteSelfMedia', 'c7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteStage',
                component: ComponentCreator('/rn-core/reference/DyteStage', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteThemePreset',
                component: ComponentCreator('/rn-core/reference/DyteThemePreset', 'f33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/release-notes',
                component: ComponentCreator('/rn-core/release-notes', '775'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/room-metadata',
                component: ComponentCreator('/rn-core/room-metadata', 'e41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/stage',
                component: ComponentCreator('/rn-core/stage', 'db6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ui-kit',
    component: ComponentCreator('/ui-kit', 'fc4'),
    routes: [
      {
        path: '/ui-kit',
        component: ComponentCreator('/ui-kit', 'a4d'),
        routes: [
          {
            path: '/ui-kit/tags',
            component: ComponentCreator('/ui-kit/tags', '8d0'),
            exact: true
          },
          {
            path: '/ui-kit/tags/releasenotes',
            component: ComponentCreator('/ui-kit/tags/releasenotes', 'ccb'),
            exact: true
          },
          {
            path: '/ui-kit',
            component: ComponentCreator('/ui-kit', '45c'),
            routes: [
              {
                path: '/ui-kit',
                component: ComponentCreator('/ui-kit', '7e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/basics/components-basics',
                component: ComponentCreator('/ui-kit/basics/components-basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/basics/pre-requisite',
                component: ComponentCreator('/ui-kit/basics/pre-requisite', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components',
                component: ComponentCreator('/ui-kit/components', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-audio-visualizer',
                component: ComponentCreator('/ui-kit/components/dyte-audio-visualizer', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-avatar',
                component: ComponentCreator('/ui-kit/components/dyte-avatar', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-button',
                component: ComponentCreator('/ui-kit/components/dyte-button', '7ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-camera-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-camera-toggle', '349'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-chat',
                component: ComponentCreator('/ui-kit/components/dyte-chat', '720'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-chat-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-chat-toggle', '9cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-clock',
                component: ComponentCreator('/ui-kit/components/dyte-clock', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-confirmation-modal',
                component: ComponentCreator('/ui-kit/components/dyte-confirmation-modal', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-controlbar',
                component: ComponentCreator('/ui-kit/components/dyte-controlbar', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-controlbar-button',
                component: ComponentCreator('/ui-kit/components/dyte-controlbar-button', '4b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-dialog',
                component: ComponentCreator('/ui-kit/components/dyte-dialog', '783'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-dialog-manager',
                component: ComponentCreator('/ui-kit/components/dyte-dialog-manager', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-emoji-picker',
                component: ComponentCreator('/ui-kit/components/dyte-emoji-picker', '046'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-ended-screen',
                component: ComponentCreator('/ui-kit/components/dyte-ended-screen', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-file-message',
                component: ComponentCreator('/ui-kit/components/dyte-file-message', 'be2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-fullscreen-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-fullscreen-toggle', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-grid',
                component: ComponentCreator('/ui-kit/components/dyte-grid', '859'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-grid-pagination',
                component: ComponentCreator('/ui-kit/components/dyte-grid-pagination', '376'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-header',
                component: ComponentCreator('/ui-kit/components/dyte-header', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-icon',
                component: ComponentCreator('/ui-kit/components/dyte-icon', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-idle-screen',
                component: ComponentCreator('/ui-kit/components/dyte-idle-screen', '6d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-image-message',
                component: ComponentCreator('/ui-kit/components/dyte-image-message', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-image-viewer',
                component: ComponentCreator('/ui-kit/components/dyte-image-viewer', 'aa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-leave-button',
                component: ComponentCreator('/ui-kit/components/dyte-leave-button', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-leave-meeting',
                component: ComponentCreator('/ui-kit/components/dyte-leave-meeting', 'd53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-logo',
                component: ComponentCreator('/ui-kit/components/dyte-logo', '346'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-meeting',
                component: ComponentCreator('/ui-kit/components/dyte-meeting', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-meeting-title',
                component: ComponentCreator('/ui-kit/components/dyte-meeting-title', '979'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-menu',
                component: ComponentCreator('/ui-kit/components/dyte-menu', '611'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-menu-item',
                component: ComponentCreator('/ui-kit/components/dyte-menu-item', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-menu-list',
                component: ComponentCreator('/ui-kit/components/dyte-menu-list', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-mic-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-mic-toggle', '95d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-mixed-grid',
                component: ComponentCreator('/ui-kit/components/dyte-mixed-grid', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-more-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-more-toggle', 'd77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-name-tag',
                component: ComponentCreator('/ui-kit/components/dyte-name-tag', '273'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-network-indicator',
                component: ComponentCreator('/ui-kit/components/dyte-network-indicator', '0bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-notification',
                component: ComponentCreator('/ui-kit/components/dyte-notification', '661'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-notifications',
                component: ComponentCreator('/ui-kit/components/dyte-notifications', '548'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-overlay-modal',
                component: ComponentCreator('/ui-kit/components/dyte-overlay-modal', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participant',
                component: ComponentCreator('/ui-kit/components/dyte-participant', 'f62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participant-count',
                component: ComponentCreator('/ui-kit/components/dyte-participant-count', '8e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participant-tile',
                component: ComponentCreator('/ui-kit/components/dyte-participant-tile', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants',
                component: ComponentCreator('/ui-kit/components/dyte-participants', '894'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants-audio',
                component: ComponentCreator('/ui-kit/components/dyte-participants-audio', '212'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants-stage-list',
                component: ComponentCreator('/ui-kit/components/dyte-participants-stage-list', 'c74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-participants-toggle', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-permissions-message',
                component: ComponentCreator('/ui-kit/components/dyte-permissions-message', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-plugin-main',
                component: ComponentCreator('/ui-kit/components/dyte-plugin-main', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-plugins',
                component: ComponentCreator('/ui-kit/components/dyte-plugins', '745'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-plugins-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-plugins-toggle', '243'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-poll',
                component: ComponentCreator('/ui-kit/components/dyte-poll', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-poll-form',
                component: ComponentCreator('/ui-kit/components/dyte-poll-form', '0e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-polls',
                component: ComponentCreator('/ui-kit/components/dyte-polls', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-polls-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-polls-toggle', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-recording-indicator',
                component: ComponentCreator('/ui-kit/components/dyte-recording-indicator', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-recording-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-recording-toggle', '93e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-remote-access-manager',
                component: ComponentCreator('/ui-kit/components/dyte-remote-access-manager', '4d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-screen-share-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-screen-share-toggle', '3d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-screenshare-view',
                component: ComponentCreator('/ui-kit/components/dyte-screenshare-view', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings',
                component: ComponentCreator('/ui-kit/components/dyte-settings', '238'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings-audio',
                component: ComponentCreator('/ui-kit/components/dyte-settings-audio', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-settings-toggle', '16b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings-video',
                component: ComponentCreator('/ui-kit/components/dyte-settings-video', 'fab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-setup-screen',
                component: ComponentCreator('/ui-kit/components/dyte-setup-screen', 'a1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-sidebar',
                component: ComponentCreator('/ui-kit/components/dyte-sidebar', '7d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-simple-grid',
                component: ComponentCreator('/ui-kit/components/dyte-simple-grid', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-spinner',
                component: ComponentCreator('/ui-kit/components/dyte-spinner', 'c55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-spotlight-grid',
                component: ComponentCreator('/ui-kit/components/dyte-spotlight-grid', 'ac8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-stage',
                component: ComponentCreator('/ui-kit/components/dyte-stage', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-switch',
                component: ComponentCreator('/ui-kit/components/dyte-switch', '710'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-text-field',
                component: ComponentCreator('/ui-kit/components/dyte-text-field', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-text-message',
                component: ComponentCreator('/ui-kit/components/dyte-text-message', 'ae0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-tooltip',
                component: ComponentCreator('/ui-kit/components/dyte-tooltip', '63f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-viewer-count',
                component: ComponentCreator('/ui-kit/components/dyte-viewer-count', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/customizations/custom-iconpack',
                component: ComponentCreator('/ui-kit/customizations/custom-iconpack', '468'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/customizations/custom-locale',
                component: ComponentCreator('/ui-kit/customizations/custom-locale', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/design-system',
                component: ComponentCreator('/ui-kit/design-system', 'b41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/quickstart',
                component: ComponentCreator('/ui-kit/quickstart', '8c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference',
                component: ComponentCreator('/ui-kit/reference', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/ui-kit/reference/classes/DyteNotificationsAudio', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/Notification',
                component: ComponentCreator('/ui-kit/reference/interfaces/Notification', 'b40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/PollObject',
                component: ComponentCreator('/ui-kit/reference/interfaces/PollObject', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/States',
                component: ComponentCreator('/ui-kit/reference/interfaces/States', '7e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/UIConfig',
                component: ComponentCreator('/ui-kit/reference/interfaces/UIConfig', '2c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/UserPreferences',
                component: ComponentCreator('/ui-kit/reference/interfaces/UserPreferences', '15e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/release-notes',
                component: ComponentCreator('/ui-kit/release-notes', '8cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/web-core',
    component: ComponentCreator('/web-core', 'def'),
    routes: [
      {
        path: '/web-core',
        component: ComponentCreator('/web-core', '6d4'),
        routes: [
          {
            path: '/web-core/tags',
            component: ComponentCreator('/web-core/tags', '65f'),
            exact: true
          },
          {
            path: '/web-core/tags/chat',
            component: ComponentCreator('/web-core/tags/chat', '3e7'),
            exact: true
          },
          {
            path: '/web-core/tags/create',
            component: ComponentCreator('/web-core/tags/create', 'ad2'),
            exact: true
          },
          {
            path: '/web-core/tags/local-user',
            component: ComponentCreator('/web-core/tags/local-user', 'd8f'),
            exact: true
          },
          {
            path: '/web-core/tags/methods',
            component: ComponentCreator('/web-core/tags/methods', 'b42'),
            exact: true
          },
          {
            path: '/web-core/tags/participant',
            component: ComponentCreator('/web-core/tags/participant', 'c19'),
            exact: true
          },
          {
            path: '/web-core/tags/participants',
            component: ComponentCreator('/web-core/tags/participants', '65a'),
            exact: true
          },
          {
            path: '/web-core/tags/plugins',
            component: ComponentCreator('/web-core/tags/plugins', '11e'),
            exact: true
          },
          {
            path: '/web-core/tags/polls',
            component: ComponentCreator('/web-core/tags/polls', 'c28'),
            exact: true
          },
          {
            path: '/web-core/tags/quickstart',
            component: ComponentCreator('/web-core/tags/quickstart', '652'),
            exact: true
          },
          {
            path: '/web-core/tags/recording',
            component: ComponentCreator('/web-core/tags/recording', 'fbe'),
            exact: true
          },
          {
            path: '/web-core/tags/releasenotes',
            component: ComponentCreator('/web-core/tags/releasenotes', '12e'),
            exact: true
          },
          {
            path: '/web-core/tags/results',
            component: ComponentCreator('/web-core/tags/results', 'a42'),
            exact: true
          },
          {
            path: '/web-core/tags/room-metadata',
            component: ComponentCreator('/web-core/tags/room-metadata', '777'),
            exact: true
          },
          {
            path: '/web-core/tags/self',
            component: ComponentCreator('/web-core/tags/self', '0cb'),
            exact: true
          },
          {
            path: '/web-core/tags/self-events',
            component: ComponentCreator('/web-core/tags/self-events', '821'),
            exact: true
          },
          {
            path: '/web-core/tags/setup',
            component: ComponentCreator('/web-core/tags/setup', '05c'),
            exact: true
          },
          {
            path: '/web-core/tags/updates',
            component: ComponentCreator('/web-core/tags/updates', '01c'),
            exact: true
          },
          {
            path: '/web-core/tags/votes',
            component: ComponentCreator('/web-core/tags/votes', 'ea3'),
            exact: true
          },
          {
            path: '/web-core/tags/web-core',
            component: ComponentCreator('/web-core/tags/web-core', '55f'),
            exact: true
          },
          {
            path: '/web-core',
            component: ComponentCreator('/web-core', '691'),
            routes: [
              {
                path: '/web-core',
                component: ComponentCreator('/web-core', '155'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/advanced/advance',
                component: ComponentCreator('/web-core/advanced/advance', '49d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/edit-chat-messages',
                component: ComponentCreator('/web-core/chat/edit-chat-messages', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/introduction',
                component: ComponentCreator('/web-core/chat/introduction', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/other-chat-functions',
                component: ComponentCreator('/web-core/chat/other-chat-functions', '14f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/receiving-chat-messages',
                component: ComponentCreator('/web-core/chat/receiving-chat-messages', 'acb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/sending-a-chat-message',
                component: ComponentCreator('/web-core/chat/sending-a-chat-message', '242'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/error-codes/error-code',
                component: ComponentCreator('/web-core/error-codes/error-code', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/error-codes/error-code-zero-ten',
                component: ComponentCreator('/web-core/error-codes/error-code-zero-ten', '98b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/Introduction',
                component: ComponentCreator('/web-core/Introduction', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/livestreaming',
                component: ComponentCreator('/web-core/livestreaming', 'd54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/events',
                component: ComponentCreator('/web-core/local-user/events', 'be2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/extras',
                component: ComponentCreator('/web-core/local-user/extras', '7ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/introduction',
                component: ComponentCreator('/web-core/local-user/introduction', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/manage-media-devices',
                component: ComponentCreator('/web-core/local-user/manage-media-devices', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/media-permission-errors',
                component: ComponentCreator('/web-core/local-user/media-permission-errors', '18d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants',
                component: ComponentCreator('/web-core/participants', '869'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/events',
                component: ComponentCreator('/web-core/participants/events', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/participant-object',
                component: ComponentCreator('/web-core/participants/participant-object', 'e1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/permissions',
                component: ComponentCreator('/web-core/participants/permissions', 'cfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/pip',
                component: ComponentCreator('/web-core/participants/pip', '772'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/disable-plugin',
                component: ComponentCreator('/web-core/plugins/disable-plugin', '445'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/enable-plugin',
                component: ComponentCreator('/web-core/plugins/enable-plugin', 'ed2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/extra',
                component: ComponentCreator('/web-core/plugins/extra', 'e02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/introduction',
                component: ComponentCreator('/web-core/plugins/introduction', '709'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/creating-a-poll',
                component: ComponentCreator('/web-core/polls/creating-a-poll', '452'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/introduction',
                component: ComponentCreator('/web-core/polls/introduction', '1a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/other-poll-functions',
                component: ComponentCreator('/web-core/polls/other-poll-functions', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/voting-on-a-poll',
                component: ComponentCreator('/web-core/polls/voting-on-a-poll', '9f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/handling-permissions',
                component: ComponentCreator('/web-core/pre-call/handling-permissions', 'a48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/media-preview',
                component: ComponentCreator('/web-core/pre-call/media-preview', 'f27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/meeting-meta',
                component: ComponentCreator('/web-core/pre-call/meeting-meta', 'cb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/virtual-bg',
                component: ComponentCreator('/web-core/pre-call/virtual-bg', '05d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/waiting-room',
                component: ComponentCreator('/web-core/pre-call/waiting-room', '4fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/recording',
                component: ComponentCreator('/web-core/recording', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteAi',
                component: ComponentCreator('/web-core/reference/DyteAi', '9d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteChat',
                component: ComponentCreator('/web-core/reference/DyteChat', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteClient',
                component: ComponentCreator('/web-core/reference/DyteClient', '9ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteConnectedMeetings',
                component: ComponentCreator('/web-core/reference/DyteConnectedMeetings', '73c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteLivestream',
                component: ComponentCreator('/web-core/reference/DyteLivestream', '934'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteMeta',
                component: ComponentCreator('/web-core/reference/DyteMeta', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteParticipant',
                component: ComponentCreator('/web-core/reference/DyteParticipant', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteParticipantMap',
                component: ComponentCreator('/web-core/reference/DyteParticipantMap', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteParticipants',
                component: ComponentCreator('/web-core/reference/DyteParticipants', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePermissionsPreset',
                component: ComponentCreator('/web-core/reference/DytePermissionsPreset', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePlugin',
                component: ComponentCreator('/web-core/reference/DytePlugin', '81a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePluginMap',
                component: ComponentCreator('/web-core/reference/DytePluginMap', '32b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePlugins',
                component: ComponentCreator('/web-core/reference/DytePlugins', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePolls',
                component: ComponentCreator('/web-core/reference/DytePolls', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteRecording',
                component: ComponentCreator('/web-core/reference/DyteRecording', '02d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteSelf',
                component: ComponentCreator('/web-core/reference/DyteSelf', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteStage',
                component: ComponentCreator('/web-core/reference/DyteStage', 'f35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteThemePreset',
                component: ComponentCreator('/web-core/reference/DyteThemePreset', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/release-notes',
                component: ComponentCreator('/web-core/release-notes', '8d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/room-metadata',
                component: ComponentCreator('/web-core/room-metadata', '1bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/stage',
                component: ComponentCreator('/web-core/stage', '3cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/upgrade',
                component: ComponentCreator('/web-core/upgrade', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '070'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
