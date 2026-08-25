{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom Metrics Autoscaler Operator 2.18 release notes {id="nodes-pods-autoscaling-custom-rn-218_{{ context }}"}

You can review the following release notes to learn about changes in the 2.18.z releases. {._abstract}

## Custom Metrics Autoscaler Operator 2.18.1-2 release notes {id="nodes-pods-autoscaling-custom-rn-2181-2_{{ context }}"}

Issued: 09 February 2026

You can review the following release notes to learn about the bug fixes provided in this release of the Custom Metrics Autoscaler Operator.

This release of the Custom Metrics Autoscaler Operator 2.18.1-2 addresses Common Vulnerabilities and Exposures (CVEs). The following advisory is available for the Custom Metrics Autoscaler Operator: [RHSA-2026:2368](https://access.redhat.com/errata/RHSA-2026:2368)


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::


## Custom Metrics Autoscaler Operator 2.18.1-1 release notes {id="nodes-pods-autoscaling-custom-rn-2181_{{ context }}"}

This release of the Custom Metrics Autoscaler Operator 2.18.1-1, which provides new features and enhancements, deprecated features, and bug fixes for running the Operator in an {{ product_title }} cluster, was issued on 15 January 2026. Review the following information to understand important changes in this release. 

The following advisory is available for the Custom Metrics Autoscaler Operator: [RHBA-2026:0730](https://access.redhat.com/errata/RHBA-2026:0730)


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::



New features and enhancements

:   Note the new features and enhancements in this release:

    *   Forced activation

    You can now temporarily force the activation of a scale target by adding the `autoscaling.keda.sh/force-activation: "true"` annotation to the `ScaledObject` custom resource (CR). ([KEDA issue 6903](https://github.com/kedacore/keda/issues/6903))
*   Excluding labels from being propagated to the HPA

    You can now exclude specific labels from being propagated to a Horizontal Pod Autoscaler (HPA) by using the `scaledobject.keda.sh/hpa-excluded-labels` annotation to the `ScaledObject` or `ScaledJob` CR. ([KEDA issue 6849](https://github.com/kedacore/keda/issues/6849))
*   Pause in scaling down

    You can now pause the scaling down of an object without preventing the object from scaling up. ([KEDA issue 6902](https://github.com/kedacore/keda/issues/6902))
*   Pause in scaling up

    You can now pause the scaling up for an object without preventing the object from scaling down. ([KEDA issue 7022](https://github.com/kedacore/keda/issues/7022))
*   Support for the s390x architecture

    The Operator can now run on `s390x` architecture. Previously it ran on `amd64`, `ppc64le`, or `arm64`. ([KEDA issue 6543](https://github.com/kedacore/keda/issues/6543))
*   Fallback for triggers of `Value` metric type

    Fallback is now supported for triggers that use the `Value` metric type. Previously, fallback was supported for only the `AverageValue` metric type. ([KEDA issue 6655](https://github.com/kedacore/keda/pull/6655))
*   Support for even distribution of Kafka partitions

    You can now configure a Kafka scaler to scale Kafka consumers by partition count on the topic. This ensures that the partitions are evenly spread across all consumers. ([KEDA issue 2581](https://github.com/kedacore/keda/issues/2581))
*   The Zap logger has replaced the Kubernetes logger

    The Operator now uses the Zap logging library to emit logs. ([KEDA issue 5732](https://github.com/kedacore/keda/issues/5732))

    Deprecated and removed features

:   *   For the CPU and Memory triggers, the `type` setting, deprecated in an earlier version, is removed. You must use `metricType` instead. ([KEDA bug 6698](https://github.com/kedacore/keda/pull/6698))

Bug fixes

:   *   Before this update, a bug in the pending-pod-condition detection logic caused duplicate jobs to be created for scaled jobs that have slow-starting containers. With this release, the logic to properly evaluate each pod individually and correctly identify when a job is no longer pending. ([KEDA bug 6698](https://github.com/kedacore/keda/pull/6698))
*   Before this update, if a deployment object contained an `envFrom` parameter that included a prefix setting, the prefix was ignored and the environment variable keys were added to the scaler configuration without the prefix. With this release, the prefix is now added to the environment variable key. ([KEDA bug 6728](https://github.com/kedacore/keda/issues/6728))
*   Before this update, a scale client was not initialized when creating a new scale handler. This was due to a segmentation fault that occurred when accessing an uninitialized scale client in the scale handler during non-static fallback modes for specific scale target types. With this release, the issue is corrected. ([KEDA bug 6992](https://github.com/kedacore/keda/pull/6992))
*   Before this update, if a user created a scaled object, the object had the `Paused` status condition of `Unknown`. With this release, the `Paused` condition is properly set to `false`. ([KEDA bug 7011](https://github.com/kedacore/keda/pull/7011))
*   Before this update, after removing the `autoscaling.keda.sh/paused-replicas` from a scaled object CR, the object could still have the `Paused` status condition of `true`. With this release, this issue has been resolved and the object reports the pause status correctly. ([KEDA bug 6982](https://github.com/kedacore/keda/pull/6982))
*   Before this update, when creating a scaled object with the `scaledobject.keda.sh/transfer-hpa-ownership` annotation, the object status might not list the name of the HPA that is taking ownership of the object. With this release, the HPA name is reported correctly. ([KEDA bug 6336](https://github.com/kedacore/keda/pull/6336))
*   Before this update, a cron trigger incorrectly prevented scaling the replicas to 0 even if the cron schedule was inactive and the `minReplicaCount` value is `0`. This happened because the trigger always reported a metric value of `1` during its inactive periods. With this release, the cron trigger is now able to return a metric of `0`, allowing  an object to scale to 0.  ([KEDA bug 6886](https://github.com/kedacore/keda/pull/6886))
*   Before this update, in a Kafka trigger, specifying `sasl:none` resulted in an error, despite `none` being the default value for `sasl`. With this release, you can now configure `sasl:none` in a Kafka trigger. ([KEDA bug 7061](https://github.com/kedacore/keda/pull/7061))
*   Before this update, when scaling to 0, the Operator might not check if all scalers are not active. As a result, the Operator could scale an object to 0 even though there were active scalers. With this release, this issue has been resolved. ([KEDA issue 6986](https://github.com/kedacore/keda/issues/6986))