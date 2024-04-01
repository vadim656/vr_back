import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectProjectInfo extends Schema.Component {
  collectionName: 'components_project_project_infos';
  info: {
    displayName: 'project_info';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    desc: Attribute.Blocks;
    img: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.project-info': ProjectProjectInfo;
    }
  }
}
