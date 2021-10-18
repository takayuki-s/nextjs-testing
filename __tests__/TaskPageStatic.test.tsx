/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

initTestHelpers()
const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 3,
            id: 3,
            title: 'Static task C',
            completed: true,
          },
          {
            userId: 4,
            id: 4,
            title: 'Static task D',
            completed: true,
          },
        ])
      )
    }
  )
)
