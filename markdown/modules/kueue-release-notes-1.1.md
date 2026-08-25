{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.1 {id="kueue-release-notes-1.1_{{ context }}"}

{{ kueue_name }} version 1.1 is a generally available release that is supported on {{ product_title }} versions 4.18 and later. {{ kueue_name }} version 1.1 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.12. {._abstract}


:::important

If you have a previously installed version of {{ kueue_name }} on your cluster, you must uninstall the Operator and manually install version 1.1. For information see [Upgrading {{ kueue_name }}](/ai_workloads/kueue/install-kueue#upgrading-kueue_install-kueue).

:::


## New features and enhancements {id="release-notes-1.1-new-features_{{ context }}"}


Configure a default local queue
:   A default local queue serves as the local queue for newly created jobs that do not have the `kueue.x-k8s.io/queue-name` label. After you create a default local queue, any new jobs created in the namespace without a `kueue.x-k8s.io/queue-name` label automatically update to have the `kueue.x-k8s.io/queue-name: default` label.

    ([RFE-7615](https://issues.redhat.com/browse/RFE-7615))


Multi-architecture and {{ hcp_capital }} support
:   With this release, {{ kueue_name }} is supported on multiple different architectures, including ARM64, 64-bit x86, ppc64le ({{ ibm_power_name }}), and s390x ({{ ibm_z_name }}), as well as on {{ hcp_capital }} for {{ product_title }}.

    ([OCPSTRAT-2103](https://issues.redhat.com/browse/OCPSTRAT-2103))

    ([OCPSTRAT-2106](https://issues.redhat.com/browse/OCPSTRAT-2106))

## Fixed issues {id="release-notes-1.1-fixed-issues_{{ context }}"}


You can create a `Kueue` custom resource by using the {{ product_title }} web console
:   Before this update, if you tried to use the {{ product_title }} web console to create a `Kueue` custom resource (CR) by using the form view, the web console showed an error and the resource could not be created. With this release, the default namespace was removed from the `Kueue` CR template. As a result, you can use the {{ product_title }} web console to create a `Kueue` CR by using the form view.

    ([OCPBUGS-58118](https://issues.redhat.com/browse/OCPBUGS-58118))

## Known issues {id="release-notes-1.1-known-issues_{{ context }}"}


`Kueue` CR description reads as "Not available" in the {{ product_title }} web console
:   After you install {{ kueue_name }}, in the **Operator details** view, the description for the `Kueue` CR reads as "Not available". This issue does not affect or degrade the {{ kueue_name }} Operator functionality.

    ([OCPBUGS-62185](https://issues.redhat.com/browse/OCPBUGS-62185))


Custom resources are not deleted properly when you uninstall {{ kueue_name }}
:   After you uninstall the {{ kueue_op }} using the **Delete all operand instances for this operator** option in the {{ product_title }} web console, some {{ kueue_name }} custom resources are not fully deleted. These resources can be viewed in the **Installed Operators** view with the status **Resource is being deleted**. As a workaround, you can manually delete the resource finalizers to remove them fully.

    ([OCPBUGS-62254](https://issues.redhat.com/browse/OCPBUGS-62254))