"use client";
import { cn } from "@/lib/utils";
import { Auth } from "aws-amplify";
import React, { Fragment, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { IconDevicesDollar } from "@tabler/icons-react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ProductsMenu: { title: string; href: string; description: string }[] = [
  {
    title: "Checkout",
    href: "/products/checkout",
    description: "High perfomance and secure checkout for SaaS",
  },
  {
    title: "Elements",
    href: "/products/elements",
    description: "Prebuilt payments page",
  },
  {
    title: "Payments link",
    href: "/products/checkout",
    description: "No-Code Payment",
  },
  {
    title: "Payments",
    href: "/products/payments",
    description: "All in one payment tools",
  },
  {
    title: "Invoicing",
    href: "/products/invoicing",
    description: "Recurring, automated B2B and B2C billing",
  },
  {
    title: "Subscribtions",
    href: "/products/subscribtions",
    description: "Flexible, multi-product subscribtions",
  },
  {
    title: "Global Tax compliance",
    href: "/products/tax-and-compliance",
    description:
      "Eliminate sales tax headaches with full, automatic global tax compliance.",
  },
  {
    title: "Fraud Protection",
    href: "/products/fraud-protection",
    description: "Reduce your risk with fraud prevention & protection",
  },
];
const SolutionsMenu: { title: string; href: string }[] = [
  {
    title: "Enterprises",
    href: "/solutions/enterprises",
  },
  {
    title: "SaaS",
    href: "/solutions/saas",
  },
  {
    title: "Marketplaces",
    href: "/solutions/marketplaces",
  },
  {
    title: "Automation",
    href: "/solutions/automation",
  },
  {
    title: "Platforms",
    href: "/solutions/platforms",
  },
  {
    title: "Ecommerce",
    href: "/solutions/ecommerce",
  },
];
const ResourcesMenu: { title: string; href: string }[] = [
  {
    title: "Support Center",
    href: "/support-center",
  },
  {
    title: "Guides",
    href: "/guides",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact Sales",
    href: "/contact-sales",
  },
];

type Props = {
  userData?: {
    id: string;
    username: string;
    __typename: string;
  };
};

export default function Header({ userData }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const logout = async () => {
    try {
      await Auth.signOut();
      router.refresh();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-[85rem] items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" passHref>
            <h1 className="text-2xl font-semibold">Jamali Pay</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {ProductsMenu.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {SolutionsMenu.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Docs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {ResourcesMenu.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex lg:flex-1 justify-end">
          {!userData ? (
            <div className="flex items-center gap-6">
              <Link
                href="/signup"
                passHref
                className="text-sm font-semibold leading-6 text-gray-900 bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-3 dark:focus:ring-offset-gray-800"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                passHref
                className="text-sm font-semibold leading-6 text-gray-900 bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-3 dark:focus:ring-offset-gray-800"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <span className="cursor-pointer">{userData.username}</span>
              <button
                onClick={() => logout()}
                className="text-sm font-semibold leading-6 text-gray-900 bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-3 dark:focus:ring-offset-gray-800"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-semibold">Jamali Pay</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <ul className="flex flex-col w-full gap-3">
                          {ProductsMenu.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                              className="list-none"
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Solutions
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <ul className="flex flex-col w-full gap-3">
                          {SolutionsMenu.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                              className="list-none"
                            ></ListItem>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/pricing"
                  passHref
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Docs
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Resources
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <ul className="flex flex-col w-full gap-3">
                          {ResourcesMenu.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                              className="list-none"
                            ></ListItem>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/pricing"
                  passHref
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </Link>
              </div>
              <div className="py-6 flex gap-4 items-center">
                <Link
                  href="signup"
                  passHref
                  className="text-sm font-semibold leading-6 text-gray-900 bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-3 dark:focus:ring-offset-gray-800"
                >
                  Log in
                </Link>
                <Link
                  href="login"
                  passHref
                  className="text-sm font-semibold leading-6 text-gray-900 bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-3 dark:focus:ring-offset-gray-800"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, title, children, ...props }) => {
  return (
    <li>
      <Link href={href!} passHref>
        <span
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </span>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
