---
title: Overview of dynamic plugins
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Overview of dynamic plugins {id="overview-dynamic-plugin"}
{%- set context = "overview-dynamic-plugin" %}

Dynamic plugins are loaded and interpreted from remote sources at runtime. One way to deliver and expose dynamic plugins to the console is through OLM Operators. The Operator creates a deployment on the platform with an HTTP server to host the plugin and exposes it using a Kubernetes service. {._abstract}

Dynamic plugins allow you to add custom pages and other extensions to your console user interface at runtime. The `ConsolePlugin` custom resource registers plugins with the console, and a cluster administrator enables plugins in the console Operator configuration.

## Key features {id="dynamic-plugins-features"}

A dynamic plugin allows you to make the following customizations to the {{ product_title }} experience:

*   Add custom pages.
*   Add perspectives beyond administrator and developer.
*   Add navigation items.
*   Add tabs and actions to resource pages.

## General guidelines {id="general-plug-in-guidelines"}
When creating your plugin, follow these general guidelines:

*   `Node.js` is required to build and run your plugin. You can use any package manager, such as npm or yarn. For download links, see Additional resources.
*   Prefix your CSS class names with your plugin name to avoid collisions. For example, `my-plugin_\_heading` and `my-plugin_\_icon`.
*   Maintain a consistent look, feel, and behavior with other console pages.
*   Follow the react-i18next localization guidelines, linked in Additional resources, when creating your plugin. You can use the `useTranslation` hook such as the one in the following example:
    ```tsx
    const Header: React.FC = () => {
      const { t } = useTranslation('plugin__console-demo-plugin');
      return <h1>{t('Hello, World!')}</h1>;
    };
    ```
*   Avoid selectors that could affect markup outside of your plugin’s components, such as element selectors. These are not APIs and are subject to change. Using them might break your plugin.
*   Provide valid JavaScript Multipurpose Internet Mail Extension (MIME) type using the `Content-Type` response header for all assets served by your plugin web server. Each plugin deployment should include a web server that hosts the generated assets of the given plugin.
*   You must build your plugin with Webpack using Webpack version 5 and later.

## PatternFly guidelines {id="_patternfly_guidelines"}
When creating your plugin, follow these guidelines for using PatternFly:

*   Use PatternFly components and PatternFly CSS variables. Core PatternFly components are available through the SDK. Using PatternFly components and variables helps your plugin look consistent in future console versions. For a list of available components, see Additional resources.
{%- if not openshift_rosa_hcp %}
    *   Use PatternFly 4.x if you are using {{ product_title }} versions 4.14 and earlier.
    *   Use PatternFly 5.x if you are using {{ product_title }} versions 4.15 through 4.18.
    *   Use PatternFly 6.x if you are using {{ product_title }} versions 4.19 and later.

{% endif %}
{% if openshift_rosa_hcp %}
    *   Use PatternFly 5.x.
{%- endif %}
*   Make your plugin accessible by following PatternFly’s accessibility fundamentals, linked in Additional resources.
*   Avoid using other CSS libraries such as Bootstrap or Tailwind. They might conflict with PatternFly and not match the rest of the console. Plugins should only include styles that are specific to their user interfaces to be evaluated on top of base PatternFly styles. Do not import styles directly from `@patternfly/react-styles/**/*.css` or `@patternfly/patternfly`. Instead, use components and CSS variables provided by the console SDK.
*   The console application is responsible for loading base styles for all supported PatternFly versions.

{% leveloffset +2 %}{% include "./modules/dynamic-plugin-localization.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Node.js](https://nodejs.org/en/)
*   [yarn](https://yarnpkg.com/)
*   [react-i18next localization guidelines](https://www.i18next.com/)
*   [PatternFly components](https://www.patternfly.org/components/all-components/)
*   [PatternFly’s accessibility fundamentals](https://www.patternfly.org/accessibility/accessibility-fundamentals/)