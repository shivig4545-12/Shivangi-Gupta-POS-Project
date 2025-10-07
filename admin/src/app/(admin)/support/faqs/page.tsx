import smallImg from '@/assets/images/small/img-2.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'react-bootstrap'

import PageTItle from '@/components/PageTItle'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Faqs' }

const FaqsPage = () => {
  return (
    <>
      <PageTItle title="FAQS" />
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center gap-1">
          <CardTitle as={'h4'} className="flex-grow-1">
            All Faq List
          </CardTitle>
          <Link href="/support/faqs/faq-add" className="btn btn-lg btn-primary">
            Add FAQ
          </Link>
        </CardHeader>
        <div>
          <div className="table-responsive">
            <table className="table align-middle mb-0 table-hover table-centered">
              <thead className="bg-light-subtle">
                <tr>
                  <th>Questions</th>
                  <th>Answer</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td className="text-success">Active</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link href="/support/faqs/faq-edit" className="btn btn-soft-primary btn-sm">
                        <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
                      </Link>
                      <Link href="" className="btn btn-soft-danger btn-sm">
                        <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <CardFooter className="border-top">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end mb-0">
              <li className="page-item">
                <Link className="page-link" href="">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" href="">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </CardFooter>
      </Card>
    </>
  )
}

export default FaqsPage
