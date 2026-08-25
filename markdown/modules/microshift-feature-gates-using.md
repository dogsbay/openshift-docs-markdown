{%- set _mod_docs_content_type = "PROCEDURE" %}
# Use feature gates for {{ microshift_short }} {id="microshift-feature-gates-using_{{ context }}"}

To use feature gates in your development environment, you must specify them in the `config.yaml` file or create a configuration snippet file. You must also configure the feature set you want to work with. {._abstract}


:::important

*   A `config.yaml` configuration file takes precedence over built-in settings. The `config.yaml` file is read every time the {{ microshift_short }} service starts.
*   Configuration snippet YAMLs take precedence over both built-in settings and the `config.yaml` configuration file.
*   After you enable feature gates, you cannot disable them.

:::


**Prerequisites**

*   You installed {{ microshift_short }}.
*   You installed the {{ oc_first }}.
*   You have `sudo` privileges on the {{ microshift_short }} host.

**Procedure**

1.  Apply features gates in one of the two following ways:
    1.  Update the {{ microshift_short }} `config.yaml` configuration file by making a copy of the provided `config.yaml.default` file in the `/etc/microshift/` directory. Name it `config.yaml` and keep it in the source directory.
    1.  Use a configuration snippet to apply the ingress control settings you want. To do this, create a configuration snippet YAML file and put it in the `/etc/microshift/config.d/` configuration directory. For example, `/etc/microshift/config.d/10-feature-gate.yaml`.
1.  Replace the default values in the `xyz` section of the {{ microshift_short }} YAML with your valid values, or create a configuration snippet file with the sections you need.
    ```yaml title="Feature gates configuration with example values"
    # ...
    apiServer:
      featureGates:
        featureSet: TechPreviewNoUpgrade
    # ...
    apiServer:
      featureGates:
        featureSet: CustomNoUpgrade
        customNoUpgrade:
          enabled:
          - "CPUManagerPolicyAlphaOptions"
          - "MemoryQoS"
          disabled:
          - "SomeDefaultEnabledFeature"
    # ...
    ```
1.  Use the following configuration rules:
    1.  You must set the `featureSet` field when configuring feature gates.
    1.  When you use `customNoUpgrade` feature, you must set the `featureSet` to `CustomNoUpgrade`. The `customNoUpgrade` field is only valid when `featureSet: CustomNoUpgrade`.
    1.  If you have a support exception for a customized node, make sure that the custom feature you want to use appears in the `specialHandlingSupportExceptionRequired` field and is enabled. The custom feature must also be enabled in the `customNoUpgrade` field.

        :::note

        If a feature is enabled in the `specialHandlingSupportExceptionRequired` field, your customized node can upgrade in the same manner as a supported node.
        
        :::

        ```yaml title="Custom feature example configuration"
        # ...
        apiServer:
           featureGates:
             featureSet: customNoUpgrade
             customNoUpgrade:
               enabled:
               - "SomeFeature"
             specialHandlingSupportExceptionRequired:
               enabled:
               - "SomeFeature"
        # ...
        ```
1.  Configure any settings required for the feature set you want to work with.
1.  Restart {{ microshift_short }} to apply the configuration changes by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```