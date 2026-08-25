{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom Metrics Autoscaler Operator 2.17 release notes {id="nodes-pods-autoscaling-custom-rn-217_{{ context }}"}

You can review the following release notes to learn about changes in the 2.17.z releases. {._abstract}

## Custom Metrics Autoscaler Operator 2.17.2-2 release notes {id="nodes-pods-autoscaling-custom-rn-2172-2_{{ context }}"}

Issued: 21 October 2025

This release of the Custom Metrics Autoscaler Operator 2.17.2-2, which is a rebuild of the 2.17.2 version of the Custom Metrics Autoscaler Operator using a newer base image and Go compiler, was issued on 21 October 2025. There are no code changes to the Custom Metrics Autoscaler Operator. 

The following advisory is available for the Custom Metrics Autoscaler Operator: [RHBA-2025:18914](https://access.redhat.com/errata/RHBA-2025:18914)

## Custom Metrics Autoscaler Operator 2.17.2 release notes  {id="nodes-pods-autoscaling-custom-rn-2172_{{ context }}"}

Issued: 25 September 2025

This release of the Custom Metrics Autoscaler Operator 2.17.2, which addresses Common Vulnerabilities and Exposures (CVEs), was issued on 25 September 2025. You can review the following release notes to learn about changes in this release.

The following advisory is available for the Custom Metrics Autoscaler Operator: [RHSA-2025:16124](https://access.redhat.com/errata/RHSA-2025:16124)


:::important

Before installing this version of the Custom Metrics Autoscaler Operator, remove any previously installed Technology Preview versions or the community-supported version of Kubernetes-based Event Driven Autoscaler (KEDA).

:::



New features and enhancements

:   Note the new features and enhancements in this release:

    *   The KEDA controller is automatically created during installation

    The KEDA controller is now automatically created when you install the Custom Metrics Autoscaler Operator. Previously, you needed to manually create the KEDA controller. You can edit the automatically-created KEDA controller, as needed. 
    *   Support for the Kubernetes workload trigger

    The Cluster Metrics Autoscaler Operator now supports using the Kubernetes workload trigger to scale pods based on the number of pods matching a specific label selector.
    *   Support for bound service account tokens

    The Cluster Metrics Autoscaler Operator now supports bound service account tokens. Previously, the Operator supported only legacy service account tokens, which are being phased out in favor of bound service account tokens for security reasons.

Bug fixes

:   *   Before this update, the KEDA controller did not support volume mounts. As a result, you could not use Kerberos with the Kafka scaler. With this release, the KEDA controller now supports volume mounts. ([OCPBUGS-42559](https://issues.redhat.com/browse/OCPBUGS-42559))
    *   Before this update, the KEDA version in the `keda-operator` deployment object log reported that the Custom Metrics Autoscaler Operator was based on an incorrect KEDA version. With this release, the correct KEDA version is reported in the log. ([OCPBUGS-58129](https://issues.redhat.com/browse/OCPBUGS-58129))