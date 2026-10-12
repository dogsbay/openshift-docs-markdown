{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.2 {id="release-notes-1.2_{{ context }}"}

{{ kueue_name }} version 1.2 is a generally available release that is supported on {{ product_title }} versions 4.18 and later. {{ kueue_name }} version 1.2 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.14. {._abstract}

## New features and enhancements {id="release-notes-1.2-new-features_{{ context }}"}


Monitoring of pending workloads
:   {{ kueue_name }} version 1.2 provides the `VisibilityOnDemand` feature to monitor the pipeline of pending jobs in the cluster queue and the local queue, and help users to estimate when their jobs will start. For more information, see [Monitoring pending workloads](https://docs.redhat.com/en/documentation/openshift_container_platform/4.20/html/ai_workloads/red-hat-build-of-kueue#monitoring-pending-workloads-install-kueue).

## Fixed issues {id="release-notes-1.2-fixed-issues_{{ context }}"}


Custom resources are not deleted properly when you uninstall {{ kueue_name }}
:   After you uninstall the {{ kueue_op }} using the **Delete all operand instances for this operator** option in the {{ product_title }} web console, {{ kueue_name }} custom resources were attempted to be deleted. With this release, they are not considered for deletion.

    ([OCPBUGS-62254](https://issues.redhat.com/browse/OCPBUGS-62254))


Documentation error in previous versions of {{ kueue_name }}
:   In [Creating a Kueue custom resource](https://docs.redhat.com/en/documentation/openshift_container_platform/4.20/html/ai_workloads/red-hat-build-of-kueue#create-kueue-cr_install-kueue), the optional workload types `Pod`, `Deployment`, `StatefulSet` were omitted. They are now included. 

    ([OCPBUGS-62877](https://issues.redhat.com/browse/OCPBUGS-62877))


{{ kueue_name }} metrics were not being exposed to Prometheus from version 1.1
:   Prometheus was not scraping metrics from the Operator’s controller, even though the ServiceMonitor and RBAC resources were successfully created as part of the Operator installation. As a result, none of the Kueue metrics were available in the cluster monitoring stack. 

    The metrics service added during the installation was configured with an incorrect port reference, causing Prometheus to fail in scraping metrics from the Kueue endpoint. The port name has been updated with the correct port name.

    ([OCPBUGS-63441](https://issues.redhat.com/browse/OCPBUGS-63441))

## Known issues {id="release-notes-1.2-known-issues_{{ context }}"}


Reconcile jobs only in opt-in namespaces
:   {{ product_title }} allows reconciliation of `Job` resources that have the `kueue.x-k8s.io/queue-name` label, even if these resources are in namespaces which are not configured to opt in to being managed by {{ product_title }}. This is inconsistent with the behavior for other core integrations like pods, deployments, and stateful sets, which are only reconciled if they are in namespaces which have been configured to opt in to being managed by {{ product_title }} by adding the `kueue.openshift.io/managed=true`.

    ([OCPBUGS-58205](https://issues.redhat.com/browse/OCPBUGS-58205))


`Kueue` CR description reads as "Not available" in the {{ product_title }} web console
:   After installing {{ kueue_name }}, in the **Operator details** view, the description for the `Kueue` CR reads as "Not available". This issue does not affect or degrade the {{ kueue_name }} Operator functionality. 

    ([OCPBUGS-62185](https://issues.redhat.com/browse/OCPBUGS-62185))