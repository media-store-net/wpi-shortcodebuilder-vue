import mitt from 'mitt'

type Events = {
  buttonClicked: any;
  onFilterInput: string;
  onQueryInput: Record<string, string>;
};

export const eventBus = mitt<Events>();

