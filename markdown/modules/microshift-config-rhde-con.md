{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring {{ op_system_bundle }} {id="microshift-config-rhde-con_{{ context }}"}

The {{ microshift_short }} configuration file, `config.yaml`, centralizes {{ op_system_bundle }} and service settings for your single-node edge platform. To create a custom configuration, you can copy the installed `config.yaml.default` file and rename it to `config.yaml`. {._abstract}

{{ microshift_short }} and {{ op_system_base_full }} work together to bring a lighter-weight, single-node Kubernetes to the edge. This combination means that there is a single node that is both control-plane and worker. It also means that the operating system handles many functions. You add features by installing optional RPMs or Operators. In many cases, you must configure the operating system or other resources in addition to the {{ microshift_short }} service.

Bringing these components together is the {{ microshift_short }} configuration file, `config.yaml`. The configuration file customizes your application platform and enables advanced functionality.

## Using the default configuration file {id="using-the-default-configuration-file_{{ context }}"}

A `config.yaml.default` file is installed automatically. You can copy this file, rename it config.yaml, and use it as the starting point for your custom configuration.

## Configuring platform features {id="configuring-platform-features_{{ context }}"}

You can use the {{ microshift_short }} configuration file to control and customize platform features. For example:


Ingress
:   Ingress is available by default, but you can add advanced functions such as TLS and route admission specifications by using parameters in the {{ microshift_short }} configuration file.

Storage
:   If you do not need storage, you can disable the built-in storage provider by using the {{ microshift_short }} configuration file. If you do want to use the built-in storage provider, you must make your adjustments in the `lvmd.config` file. The role of the {{ microshift_short }} configuration file in this case is to set whether you use the default storage provider.

Advanced networking functions
:   Advanced networking functions, such as using multiple networks. The Multus package is an installable RPM, but you set up access by using the {{ microshift_short }} configuration file to set parameters. In addition, you must configure network settings on your networks through the host.


:::note

You can also add features that operate without configurations to the {{ microshift_short }} `config.yaml` file. For example, you can install and configure GitOps for application management without configuring {{ microshift_short }}.

:::