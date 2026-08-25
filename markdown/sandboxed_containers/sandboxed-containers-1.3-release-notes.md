{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ sandboxed_containers_first }} {{ sandboxed_containers_version }} release notes {id="sandboxed-containers-1-3-release-notes"}
{%- set context = "sandboxed-containers-release-notes" %}

## About this release {id="sandboxed-containers-1-3-about-this-release"}

These release notes track the development of {{ sandboxed_containers_first }} {{ sandboxed_containers_version }} alongside Red Hat {{ product_title }} {{ product_version }}.

This product is fully supported and enabled by default as of {{ product_title }} 4.10.

## New features and enhancements {id="sandboxed-containers-1-3-new-features-and-enhancements"}

### Container ID in metrics list {id="refined-kata-metrics"}

The `sandbox_id` with the ID of the relevant sandboxed container now appears in the metrics list on the **Metrics** page in the web console.

In addition, the `kata-monitor` process now adds three new labels to kata-specific metrics: `cri_uid`, `cri_name`, and `cri_namespace`. These labels enable kata-specific metrics to relate to corresponding kubernetes workloads.

For more information about kata-specific metrics, see [About {{ sandboxed_containers_first }} metrics](/sandboxed_containers/monitoring-sandboxed-containers#sandboxed-containers-metrics-list_monitoring-sandboxed-containers).

### {{ sandboxed_containers_first }} availability on AWS bare metal {id="osc-baremetal-fully-supported-on-aws"}

Previously, {{ sandboxed_containers_first }} availability on AWS bare metal was in Technology Preview. With this release, installing {{ sandboxed_containers_first }} on AWS bare-metal clusters is fully supported.

### Support for {{ sandboxed_containers_first }} on {{ sno }} {id="osc-with-sno-topology"}

{{ sandboxed_containers_first }} now work on {{ sno }} clusters when the {{ sandboxed_containers_operator }} is installed by {{ rh_rhacm_first }}.

## Bug fixes {id="sandboxed-containers-1-3-bug-fixes"}

*   Previously, when creating the `KataConfig` CR and observing the pod status under the `openshift-sandboxed-containers-operator` namespace, a huge number of restarts for monitor pods was shown. The monitor pods use a specific SELinux policy that was installed as part of the `sandboxed-containers` extension installation. The monitor pod was created immediately. However, the SELinux policy was not yet available, which resulted in a pod creation error, followed by a pod restart.

    With this release, the SELinux policy is available when the monitor pod is created, and the monitor pod transitions to a `Running` state immediately. ([**KATA-1338**](https://issues.redhat.com/browse/KATA-1338))
*   Previously, {{ sandboxed_containers_first }} deployed a security context constraint (SCC) on startup which enforced a custom SELinux policy that was not available on Machine Config Operator (MCO) pods. This caused the MCO pod to change to a `CrashLoopBackOff` state and cluster upgrades to fail. With this release, {{ sandboxed_containers_first }} deploys the SCC when creating the `KataConfig` CR and no longer enforces using the custom SELinux policy. ([**KATA-1373**](https://issues.redhat.com/browse/KATA-1373))
*   Previously, when uninstalling the {{ sandboxed_containers_operator }}, the `sandboxed-containers-operator-scc` custom resource was not deleted. With this release, the `sandboxed-containers-operator-scc` custom resource is deleted when uninstalling the {{ sandboxed_containers_operator }}. ([**KATA-1569**](https://issues.redhat.com/browse/KATA-1569))

## Known issues {id="sandboxed-containers-1-3-known-issues"}

*   If you are using {{ sandboxed_containers_first }}, you might receive SELinux denials when accessing files or directories mounted from the `hostPath` volume in an {{ product_title }} cluster. These denials can occur even when running privileged sandboxed containers because privileged sandboxed containers do not disable SELinux checks.

    Following SELinux policy on the host guarantees full isolation of the host file system from the sandboxed workload by default. This also provides stronger protection against potential security flaws in the `virtiofsd` daemon or QEMU.

    If the mounted files or directories do not have specific SELinux requirements on the host, you can use local persistent volumes as an alternative. Files are automatically relabeled to `container_file_t`, following SELinux policy for container runtimes. See [Persistent storage using local volumes](/storage/persistent_storage/persistent_storage_local/persistent-storage-local#persistent-storage-local) for more information.

    Automatic relabeling is not an option when mounted files or directories are expected to have specific SELinux labels on the host. Instead, you can set custom SELinux rules on the host to allow the `virtiofsd` daemon to access these specific labels. ([**BZ#1904609**](https://bugzilla.redhat.com/show_bug.cgi?id=1904609))
*   Some {{ sandboxed_containers_operator }} pods use container CPU resource limits to increase the number of available CPUs for the pod. These pods might receive fewer CPUs than requested. If the functionality is available inside the container, you can diagnose CPU resource issues by using `oc rsh <pod>` to access a pod and running the `lscpu` command:
    ```terminal
    $ lscpu
    ```
    ```terminal title="Example output"
    CPU(s):                          16
    On-line CPU(s) list:             0-12,14,15
    Off-line CPU(s) list:            13
    ```

    The list of offline CPUs will likely change unpredictably from run to run.

    As a workaround, you can use a pod annotation to request additional CPUs rather than setting a CPU limit. CPU requests that use pod annotation are not affected by this issue, because the processor allocation method is different. Rather than setting a CPU limit, the following `annotation` must be added to the metadata of the pod:
    ```yaml
    metadata:
      annotations:
        io.katacontainers.config.hypervisor.default_vcpus: "16"
    ```

    ([**KATA-1376**](https://issues.redhat.com/browse/KATA-1376))
*   The progress of the runtime installation is shown in the `status` section of the `kataConfig` custom resource (CR). However, the progress is not shown if all of the following conditions are true:
    *   There are no worker nodes defined. You can run `oc get machineconfigpool` to check the number of worker nodes in the machine config pool.
    *   No `kataConfigPoolSelector` is specified to select nodes for installation.


        In this case, the installation starts on the control plane nodes because the Operator assumes it is a converged cluster where nodes have both control plane and worker roles. The `status` section of the `kataConfig` CR is not updated during the installation. ([**KATA-1017**](https://issues.redhat.com/browse/KATA-1017))
*   When using older versions of the Buildah tool in {{ sandboxed_containers_first }}, the build fails with the following error:
    ```text
    process exited with error: fork/exec /bin/sh: no such file or directory

    subprocess exited with status 1
    ```

    You must use the latest version of Buildah, available at [quay.io](https://quay.io/buildah/stable:latest).

    ([**KATA-1278**](https://issues.redhat.com/browse/KATA-1278))
*   In the **KataConfig** tab in the web console, if you click **Create KataConfig** while in the **YAML view**, the `KataConfig` YAML is missing the `spec` fields. Toggling to the **Form view** and then back to the **YAML view** fixes this issue and displays the full YAML. ([**KATA-1372**](https://issues.redhat.com/browse/KATA-1372))
*   In the **KataConfig** tab in the web console, a `404: Not found` error message appears whether a `KataConfig` CR already exists or not. To access an existing `KataConfig` CR, go to **Home** > **Search**. From the **Resources** list, select **KataConfig**. ([**KATA-1605**](https://issues.redhat.com/browse/KATA-1605))
*   Upgrading {{ sandboxed_containers_first }} does not automatically update the existing `KataConfig` CR. As a result, monitor pods from previous deployments are not restarted and continue to run with an outdated `kataMonitor` image.

    Upgrade the `kataMonitor` image with the following command:
    ```terminal
    $ oc patch kataconfig example-kataconfig --type merge --patch '{"spec":{"kataMonitorImage":"registry.redhat.io/openshift-sandboxed-containers/osc-monitor-rhel8:1.3.0"}}'
    ```

    You can also upgrade the `kataMonitor` image by editing the `KataConfig` YAML in the web console.

    ([**KATA-1650**](https://issues.redhat.com/browse/KATA-1650))

## Asynchronous errata updates {id="sandboxed-containers-1-3-asynchronous-errata-updates"}

Security, bug fix, and enhancement updates for {{ sandboxed_containers_first }} {{ product_version }} are released as asynchronous errata through the Red Hat Network. All {{ product_title }} {{ product_version }} errata are available on the [Red Hat Customer Portal](https://access.redhat.com/downloads/content/290/). For more information about asynchronous errata, see the [{{ product_title }} Life Cycle](https://access.redhat.com/support/policy/updates/openshift).

Red Hat Customer Portal users can enable errata notifications in the account settings for Red Hat Subscription Management (RHSM). When errata notifications are enabled, users are notified by email whenever new errata relevant to their registered systems are released.


:::note

Red Hat Customer Portal user accounts must have systems registered and consuming {{ product_title }} entitlements for {{ product_title }} errata notification emails to generate.

:::


This section will continue to be updated over time to provide notes on enhancements and bug fixes for future asynchronous errata releases of {{ sandboxed_containers_first }} {{ sandboxed_containers_version }}.

### RHSA-2022:6072 - {{ sandboxed_containers_first }} {{ sandboxed_containers_version }}.0 image release, bug fix, and enhancement advisory. {id="sandboxed-containers-1-3-0"}

Issued: 2022-08-17

{{ sandboxed_containers_first }} release {{ sandboxed_containers_version }}.0 is now available. This advisory contains an update for {{ sandboxed_containers_first }} with enhancements and bug fixes.

The list of bug fixes included in the update is documented in the [RHSA-2022:6072](https://access.redhat.com/errata/RHBA-2022:6072) advisory.

### RHSA-2022:7058 - {{ sandboxed_containers_first }} {{ sandboxed_containers_version }}.1 security fix and bug fix advisory. {id="sandboxed-containers-1-3-1"}

Issued: 2022-10-19

{{ sandboxed_containers_first }} release {{ sandboxed_containers_version }}.1 is now available. This advisory contains an update for {{ sandboxed_containers_first }} with security fixes and a bug fix.

The list of bug fixes included in the update is documented in the [RHSA-2022:7058](https://access.redhat.com/errata/RHSA-2022:7058) advisory.