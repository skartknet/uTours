import TourStep from './TourStep.js';

export default interface Tour {
  id?: string;
  name: string;
  description?: string;
  steps?: TourStep[];
}
