import React, { useReducer } from 'react';
import { backgrounds } from '../../styledVariables';
import { IColumn } from './Table';

const initColumns: Record<string, IColumn> = {
  newTask: {
    key: 'newTask',
    title: 'New task',
    items: [
      {
        key: 'newTask_0',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.mint,
      },
      {
        key: 'newTask_1',
        description: 'Compare PPC agencies and make a report for Steven',
        time: '3:00h',
        color: backgrounds.purple,
      },
      {
        key: 'newTask_2',
        description: 'Meeting with Amanda (PR department)',
        time: '0:30h',
        color: backgrounds.mint,
      },
      {
        key: 'newTask_3',
        description: "Get Patrick's approval for homepage new design",
        time: '0:20h',
        color: backgrounds.purple,
      },
    ],
  },
  scheduled: {
    key: 'scheduled',
    title: 'Scheduled',
    items: [
      {
        key: 'scheduled_0',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: 'scheduled_1',
        description: 'Write a blogpost "7 best strategies for SEO in 2020"',
        time: '5:00h',
        color: backgrounds.peach,
      },
      {
        key: 'scheduled_2',
        description: 'New Ad copies for Manamaja',
        time: '2:00h',
        color: backgrounds.lime,
      },
    ],
  },
  inProgress: {
    key: 'inProgress',
    title: 'In progress',
    items: [
      {
        key: 'inProgress_0',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: 'inProgress_1',
        description: "Record a video comment about last week's analytics report",
        time: '0:20h',
        color: backgrounds.pink,
      },
      {
        key: 'inProgress_2',
        description: 'Process all resumes for Content Marketer position',
        time: '1:00h',
        color: backgrounds.orange,
      },
    ],
  },
  completed: {
    key: 'completed',
    title: 'Completed',
    items: [
      {
        key: 'completed_0',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: 'completed_1',
        description: 'Weekly planning session',
        time: '0:45h',
        color: backgrounds.pink,
      },
      {
        key: 'completed_2',
        description: 'Create 5+ target audiences in Facebook for Samsung ...',
        time: '2:30h',
        color: backgrounds.orange,
      },
      {
        key: 'completed_3',
        description: 'Check FB Banner Design and give feedback',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: 'completed_4',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.pink,
      },
    ],
  },
};

interface ReducerAction {
  type: 'addColumn';
  payload?: IColumn;
}

const reducer = (prev: Record<string, IColumn>, action: ReducerAction): Record<string, IColumn> => {
  return prev;
};

const useTableData = (): [Record<string, IColumn>, React.Dispatch<ReducerAction>] => {
  const [state, dispatch] = useReducer(reducer, initColumns);

  return [state, dispatch];
};

export default useTableData;