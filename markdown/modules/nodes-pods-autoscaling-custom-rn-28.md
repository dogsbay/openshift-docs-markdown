{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom Metrics Autoscaler Operator 2.8 release notes {id="nodes-pods-autoscaling-custom-rn-28_{{ context }}"}

You can review the following release notes to learn about changes in the 2.8.z releases. {._abstract}

## Custom Metrics Autoscaler Operator 2.8.2-174 release notes {id="nodes-cma-autoscaling-custom-rn-282-174_{{ context }}"}

This release of the Custom Metrics Autoscaler Operator 2.8.2-174 provides new features and bug fixes for running the Operator in an {{ product_title }} cluster. The components of the Custom Metrics Autoscaler Operator 2.8.2-174 were released in [RHEA-2023:1683](https://access.redhat.com/errata/RHEA-2023:1683).


:::important

The Custom Metrics Autoscaler Operator version 2.8.2-174 is a [Technology Preview](https://access.redhat.com/support/offerings/techpreview/) feature.

:::



New features and enhancements

:   Note the new features and enhancements in this release:

    *   Operator upgrade support

    You can now upgrade from a prior version of the Custom Metrics Autoscaler Operator. See "Changing the update channel for an Operator" in the "Additional resources" for information on upgrading an Operator.
    *   must-gather support

    You can now collect data about the Custom Metrics Autoscaler Operator and its components by using the {{ product_title }} `must-gather` tool. Currently, the process for using the `must-gather` tool with the Custom Metrics Autoscaler is different from that of other Operators. For more information, see "Gathering debugging data".

## Custom Metrics Autoscaler Operator 2.8.2 release notes {id="nodes-cma-autoscaling-custom-rn-282_{{ context }}"}

This release of the Custom Metrics Autoscaler Operator 2.8.2 provides new features and bug fixes for running the Operator in an {{ product_title }} cluster. The components of the Custom Metrics Autoscaler Operator 2.8.2 were released in [RHSA-2023:1042](https://access.redhat.com/errata/RHSA-2023:1042).


:::important

The Custom Metrics Autoscaler Operator version 2.8.2 is a [Technology Preview](https://access.redhat.com/support/offerings/techpreview/) feature.

:::



New features and enhancements

:   Note the new features and enhancements in this release:

    *   Audit Logging

    You can now gather and view audit logs for the Custom Metrics Autoscaler Operator and its associated components. Audit logs are security-relevant chronological sets of records that document the sequence of activities that have affected the system by individual users, administrators, or other components of the system.
    *   Scale applications based on Apache Kafka metrics

    You can now use the KEDA Apache kafka trigger/scaler to scale deployments based on an Apache Kafka topic.
    *   Scale applications based on CPU metrics

    You can now use the KEDA CPU trigger/scaler to scale deployments based on CPU metrics.
    *   Scale applications based on memory metrics

    You can now use the KEDA memory trigger/scaler to scale deployments based on memory metrics.