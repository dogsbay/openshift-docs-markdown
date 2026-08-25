{%- set _mod_docs_content_type = "CONCEPT" %}

# Workaround for OpenShift ADP Controller segmentation fault {id="workaround-for-openshift-adp-controller-segmentation-fault_{{ context }}"}

Define either `velero` or `cloudstorage` in your Data Protection Application (DPA) configuration to prevent indefinite pod crashes. This configuration resolves a segmentation fault in the `openshift-adp-controller-manager` pod that occurs when both components are enabled. {._abstract}

The `openshift-adp-controller-manager` pod fails with a crash loop segmentation fault due to the following settings:

*   If you define both `velero` and `cloudstorage`, the `openshift-adp-controller-manager` fails.
*   If you do not define both `velero` and `cloudstorage`, the `openshift-adp-controller-manager` fails.

See _OADP-1054_ for more information.

**Additional resources**
{._additional-resources}

*   [OADP-1054](https://issues.redhat.com/browse/OADP-1054)