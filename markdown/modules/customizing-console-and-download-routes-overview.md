{%- set _mod_docs_content_type = "CONCEPT" %}
# Console and download route customization {id="customizing-console-and-download-routes-overview_{{ context }}"}

You can customize the `console` and `downloads` routes by using the `ingress` config route configuration API. Using this API centralizes route configuration for both routes and takes precedence over the deprecated `console-operator` config method. {._abstract}

If the `console` custom route is configured in both the `ingress` config and the `console-operator` config, the `ingress` config custom route configuration takes precedence. Configuring custom routes through the `console-operator` config is deprecated.