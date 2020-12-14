import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { color, radius } from './global-vars.js';

export default createGlobalStyle`
  .text-primary {
    color: ${color.primary} !important;
  }
  .text-muted, .text-secondary {
    color: ${color.secondary} !important;
  }
  .text-success {
    color: ${color.success} !important;
  }
  .text-danger {
    color: ${color.danger} !important;
  }
  .text-dark {
    color: ${color.dark_grey} !important;
  }
  .text-warning {
    color: ${color.warning} !important;
  }
  .text-info {
    color: ${color.info} !important;
  }
  .text-indigo {
    color: ${color.indigo} !important;
  }
  .text-purple {
    color: ${color.purple} !important;
  }
  .text-pink {
    color: ${color.pink} !important;
  }
  .text-teal {
    color: ${color.teal} !important;
  }
  .text-light {
    color: ${color.light} !important;
  }

  .text-small, small {
    font-size: 0.7857rem;
  }
  .text-caption {
    font-weight: medium;
    font-size: 0.8571rem;
  }

  .link, a {
    text-decoration: none;
    color: ${color.primary};
  }

  .link:hover, a:hover {
    cursor: pointer;
    color: ${darken(0.05, color.primary)};
  }

  .border {
    border: 1px solid ${color.grey};
  }
  .border-top {
    border-top: 1px solid ${color.grey};
  }
  .border-bottom {
    border-bottom: 1px solid ${color.grey};
  }
  .border-left {
    border-left: 1px solid ${color.grey};
  }
  .border-right {
    border-right: 1px solid ${color.grey};
  }

  .border-0 {
    border: 0;
  }
  .border-top-0 {
    border: 0 1px 1px 1px solid ${color.grey};
  }
  .border-bottom-0 {
    border: 1px 1px 0 1px 1px solid ${color.grey};
  }
  .border-left-0 {
    border: 1px 1px 1px 0 solid ${color.grey};
  }
  .border-right-0 {
    border: 1px 0 1px 1px solid ${color.grey};
  }

  .border-primary {
    border-color: ${color.primary} !important;
  }
  .border-secondary {
    border-color: ${color.secondary} !important;
  }
  .border-success {
    border-color: ${color.success} !important;
  }
  .border-warning {
    border-color: ${color.warning} !important;
  }
  .border-danger {
    border-color: ${color.danger} !important;
  }
  .border-info {
    border-color: ${color.info} !important;
  }
  .border-light {
    border-color: ${color.light} !important;
  }
  .border-indigo {
    border-color: ${color.indigo} !important;
  }
  .border-teal {
    border-color: ${color.teal} !important;
  }
  .border-pink {
    border-color: ${color.pink} !important;
  }
  .border-dark {
    border-color: ${color.dark} !important;
  }
  .border-purple {
    border-color: ${color.purple} !important;
  }

  .rounded-0 {
    border-radius: 0;
  }
  .rounded {
    border-radius: ${radius.default};
  }
  .rounded-top {
    border-radius: ${radius.default} ${radius.default} 0 0;
  }
  .rounded-right {
    border-radius: 0 ${radius.default} ${radius.default} 0;
  }
  .rounded-left {
    border-radius: ${radius.default} 0 0 ${radius.default};
  }
  .rounded-bottom {
    border-radius: 0 0 ${radius.default} ${radius.default};
  }
  .rounded-circle {
    border-radius: 50%;
  }

  .bg-primary {
    background-color: ${color.primary};
  }
  .bg-secondary {
    background-color: ${color.secondary};
  }
  .bg-success {
    background-color: ${color.success};
  }
  .bg-warning {
    background-color: ${color.warning};
  }
  .bg-danger {
    background-color: ${color.danger};
  }
  .bg-dark {
    background-color: ${color.dark};
  }
  .bg-dark {
    background-color: ${color.dark_grey};
  }
  .bg-light {
    background-color: ${color.light};
  }
  .bg-grey {
    background-color: ${color.grey};
  }
  .bg-white {
    background-color: ${color.white};
  }
  .bg-info {
    background-color: ${color.info};
  }
  .bg-indigo {
    background-color: ${color.indigo};
  }
  .bg-purple {
    background-color: ${color.purple};
  }
  .bg-pink {
    background-color: ${color.pink};
  }
  .bg-teal {
    background-color: ${color.teal};
  }

  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }
  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
  .shadow-none {
    box-shadow: none !important;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }

  .figure {
    display: inline-block;
  }

  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .figure-caption {
    font-size: 90%;
    color: #6c757d;
  }

  code {
    font-size: 87.5%;
    color: #e83e8c;
    word-wrap: break-word;
  }

  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 87.5%;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }

  kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700;
  }

  pre {
    display: block;
    font-size: 87.5%;
    color: #212529;
  }

  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

@media print {
  *,
  *::before,
  *::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  abbr[title]::after {
    content: " (" attr(title) ")";
  }
  pre {
    white-space: pre-wrap !important;
  }
  pre,
  blockquote {
    border: 0.0714rem solid ${color.secondary};
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }
  .container {
    min-width: 992px !important;
  }
  .navbar {
    display: none;
  }

  .Toastify__toast--error {
    padding-left: 1.0714rem;
    box-shadow: 0 0 0.7143rem 0.1429rem rgba(245, 25, 78,0.4);
    font-weight: bold;
    border-radius: 0.2857rem;
    background: #F5194E;
  }
}`;
