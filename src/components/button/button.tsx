"use client";

import React from "react";
import cx from "classnames";
import styles from "./button.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "link";
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode | string;
}

export const Button = (props: Props) => {
  const {
    variant = "primary",
    loading = false,
    disabled = false,
    children,
    ...restOfProps
  } = props;

  const isLink = variant === "link";

  const buttonClasses = cx(styles.button, {
    [styles.primary]: variant === "primary",
    [styles.disabled]: disabled,
  });

  const contentClasses = cx({
    [styles.loading]: loading,
  });

  return (
    <button {...restOfProps} className={isLink ? styles.link : buttonClasses}>
      <span className={contentClasses}>{children}</span>
      {loading && <span className={styles.loader} />}
    </button>
  );
};
