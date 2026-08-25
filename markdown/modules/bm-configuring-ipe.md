{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding node hardware metrics to the Monitoring stack {id="bm-configuring-ipe_{{ context }}"}

To access hardware metrics for your bare-metal nodes in the web console, enable the Ironic Prometheus Exporter in your cluster. {._abstract}

**Prerequisites**

*   You have enabled the `TechPreviewNoUpgrade` feature set in your cluster’s `FeatureGate` custom resource (CR).
For more information, see "Enabling features using feature gates".
*   You bare-metal nodes use Redfish-compatible baseboard management controllers (BMCs).

**Procedure**

1.  Enable the Ironic Prometheus Exporter by running the following command:
    ```terminal
    $ oc patch provisioning provisioning-configuration \
        --type=merge \
        -p '{"spec":{"prometheusExporter":{"enabled":true}}}'
    ```
1.  Optional: Configure the data collection interval by running the following command:
    ```terminal
    $ oc patch provisioning provisioning-configuration \
        --type=merge \
        -p '{"spec":{"prometheusExporter":{"sensorCollectionInterval":<interval>}}}'
    ```

    Replace `<interval>` with the interval in seconds for collecting sensor data from BMCs.
    The minimum value is `60`.
1.  Optional: Disable default alerting rules for hardware metrics by running the following command:
    ```terminal
    $ oc patch provisioning provisioning-configuration \
        --type=merge \
        -p '{"spec":{"prometheusExporter":{"disableDefaultPrometheusRules":true}}}'
    ```

    When `disableDefaultPrometheusRules` is set to `true`, the configuration prevents deployment of default alerting rules for hardware metrics.
1.  Optional: Disable the Ironic Prometheus Exporter by running the following command:
    ```terminal
    $ oc patch provisioning provisioning-configuration \
        --type=merge \
        -p '{"spec":{"prometheusExporter":{"enabled":false}}}'
    ```

**Verification**

1.  From the web console, click **Observe** → **Metrics** and enter "baremetal" into the **Expression** field.
Several autocomplete suggestions should appear, such as the following examples:

    `baremetal_power_status`

    `baremetal_temperature_status`

    `baremetal_drive_status`

    `baremetal_fan_status`
1.  Select one of the autocomplete suggestions and click **Run Queries**.
1.  Verify that the queried hardware metrics appear in the UI.
1.  If you did not disable default alerting rules, view them by running the following command:
    ```terminal
    $ oc -n openshift-machine-api get promrule metal3-defaults -oyaml
    ```