import IconifyIcon from '@/components/wrappers/IconifyIcon'
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient'
import { getNotifications } from '@/helpers/data'
import { NotificationType } from '@/types/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

const NotificationItem = ({ from, content, icon }: NotificationType) => {
  return (
    <DropdownItem className="py-3 border-bottom text-wrap">
      <div className="d-flex">
        <div className="flex-shrink-0">
          {icon ? (
            <Image src={icon} className="img-fluid me-2 avatar-sm rounded-circle" alt="avatar-1" />
          ) : (
            <div className="avatar-sm me-2">
              <span className="avatar-title bg-soft-info text-info fs-20 rounded-circle">{from.charAt(0).toUpperCase()}</span>
            </div>
          )}
        </div>
        <div className="flex-grow-1">
          <p className="mb-0 fw-semibold">{from}</p>
          <p className="mb-0 text-wrap">{content}</p>
        </div>
      </div>
    </DropdownItem>
  )
}

const Notifications = async () => {
  const notificationList = await getNotifications()
  return (
    <Dropdown className="topbar-item ">
      <DropdownToggle
        as={'a'}
        type="button"
        className="topbar-button position-relative content-none"
        id="page-header-notifications-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <IconifyIcon icon="solar:bell-bing-bold-duotone" className="fs-24 align-middle " />
        <span className="position-absolute topbar-badge fs-10 translate-middle badge bg-danger rounded-pill">
          1<span className="visually-hidden">unread messages</span>
        </span>
      </DropdownToggle>
      <DropdownMenu className="py-0 dropdown-lg dropdown-menu-end" aria-labelledby="page-header-notifications-dropdown">
        <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
          <Row className="align-items-center">
            <div className="col">
              <h6 className="m-0 fs-16 fw-semibold"> Notifications</h6>
            </div>
            <div className="col-auto">
              <Link href="" className="text-dark text-decoration-underline">
                <small>Clear All</small>
              </Link>
            </div>
          </Row>
        </div>
        <SimplebarReactClient style={{ maxHeight: 280 }}>
          {notificationList.map((notification, idx) => (
            <NotificationItem key={idx} {...notification} />
          ))}
        </SimplebarReactClient>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Notifications
