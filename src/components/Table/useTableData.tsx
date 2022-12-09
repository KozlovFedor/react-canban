import React, { useReducer } from 'react';
import { backgrounds } from '../../styledVariables';
import { IColumn } from './Table';

const initColumns: Record<string, IColumn> = {
  newTask: {
    key: 'newTask',
    title: 'New task',
    items: [
      {
        key: '00',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.mint,
      },
      {
        key: '01',
        description: 'Compare PPC agencies and make a report for Steven',
        time: '3:00h',
        color: backgrounds.purple,
      },
      {
        key: '02',
        description: 'Meeting with Amanda (PR department)',
        time: '0:30h',
        color: backgrounds.mint,
      },
      {
        key: '03',
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
        key: '04',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: '05',
        description: 'Write a blogpost "7 best strategies for SEO in 2020"',
        time: '5:00h',
        color: backgrounds.peach,
      },
      {
        key: '06',
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
        key: '07',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: '08',
        description: "Record a video comment about last week's analytics report",
        time: '0:20h',
        color: backgrounds.pink,
      },
      {
        key: '09',
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
        key: '10',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: '11',
        description: 'Weekly planning session',
        time: '0:45h',
        color: backgrounds.pink,
      },
      {
        key: '12',
        description: 'Create 5+ target audiences in Facebook for Samsung ...',
        time: '2:30h',
        color: backgrounds.orange,
      },
      {
        key: '13',
        description: 'Check FB Banner Design and give feedback',
        time: '0:20h',
        color: backgrounds.orange,
      },
      {
        key: '14',
        description: 'Check email',
        time: '0:20h',
        color: backgrounds.pink,
      },
    ],
  },
};

type MoveItemActionType = {
  type: 'moveItem';
  payload: {
    toColumnKey: string;
    toItemKey: string;
    fromColumnKey: string;
    fromItemKey: string;
  }
}

type ReducerAction = MoveItemActionType;

const reducer = (prev: Record<string, IColumn>, action: ReducerAction): Record<string, IColumn> => {
  switch (action.type) {
    case 'moveItem':
      const fromColumn = action.payload.fromColumnKey;
      const toColumn = action.payload.toColumnKey;
      const movedItem = prev[fromColumn].items.find(item => item.key === action.payload.fromItemKey);
      if (!movedItem) {
        return prev;
      }
      const next: Record<string, IColumn> = {};
      Object.entries(prev).forEach(([key, val]) => {
        next[key] = {
          key: val.key,
          title: val.title,
          items: val.items.map(item => ({...item})),
        };
      });
      next[fromColumn].items = next[fromColumn].items.filter(item => item.key !== action.payload.fromItemKey);
      const toItemIndex = next[toColumn].items.findIndex(item => item.key === action.payload.toItemKey);
      if (toItemIndex !== -1) {
        next[toColumn].items.splice(toItemIndex, 0, movedItem);
      } else {
        next[toColumn].items.push(movedItem);
      }
      return next;
    default:
      return prev;
  }
};

const useTableData = (): [Record<string, IColumn>, React.Dispatch<ReducerAction>] => {
  const [state, dispatch] = useReducer(reducer, initColumns);

  return [state, dispatch];
};

export default useTableData;