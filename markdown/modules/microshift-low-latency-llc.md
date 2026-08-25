{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable last-level cache locality in {{ microshift_short }} {id="microshift-low-latency-llc-enable_{{ context }}"}

You can align workloads with CPU cores that share the same last-level cache (LLC) to improve performance for latency-sensitive applications. To apply this alignment, enable the Kubernetes CPU Manager option `prefer-align-cpus-by-uncorecache`. {._abstract}

{%- set FeatureName = "Last-level cache (LLC) locality" %}
{% include "./snippets/technology-preview.md" %}


:::warning

This feature is part of a feature gate. After you enable feature gates, you cannot disable them or update {{ product_title_first }}, and your cluster can become unstable or lose data. Enable feature gates only in non-production environments.

:::


**Procedure**

1.  Add the following content to `/etc/microshift/config.yaml`. If you already have a `kubelet` section from the earlier section, merge the `cpuManagerPolicyOptions` entry and ensure the feature gate is present.
    ```yaml
    apiServer:
      featureGates:
        featureSet: "CustomNoUpgrade"
        customNoUpgrade:
          enabled:
          - "CPUManagerPolicyBetaOptions"
    kubelet:
      reservedSystemCPUs: "0"
      cpuManagerPolicy: static
      cpuManagerPolicyOptions:
        prefer-align-cpus-by-uncorecache: "true"
    ```
1.  To apply the configuration, restart {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```