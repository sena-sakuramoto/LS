import { forwardRef } from "react";
import { Link as WouterLink } from "wouter";
import { cn } from "@/lib/utils";

type CareersLinkProps = Omit<
  React.ComponentPropsWithoutRef<"a">,
  "href"
> & {
  href: string;
};

function resetScrollPosition() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

const CareersLink = forwardRef<HTMLAnchorElement, CareersLinkProps>(
  ({ onClick, href, children, ...props }, ref) => {
    return (
      <WouterLink
        href={href}
        asChild
      >
        <a
          {...props}
          href={href}
          ref={ref}
          className={cn("tap-bounce", props.className)}
          onClick={(event) => {
            resetScrollPosition();
            onClick?.(event);

            window.requestAnimationFrame(() => {
              resetScrollPosition();
              window.requestAnimationFrame(resetScrollPosition);
            });
            window.setTimeout(resetScrollPosition, 120);
          }}
        >
          {children}
        </a>
      </WouterLink>
    );
  },
);

CareersLink.displayName = "CareersLink";

export default CareersLink;
