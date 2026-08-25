---
title: Performing latency tests for platform verification
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Performing latency tests for platform verification {id="cnf-performing-platform-verification-latency-tests"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cnf-latency-tests" %}

You can use the Cloud-native Network Functions (CNF) tests image to run latency tests on a CNF-enabled {{ product_title }} cluster, where all the components required for running CNF workloads are installed. Run the latency tests to validate node tuning for your workload.

The `cnf-tests` container image is available at `registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }}`.

## Prerequisites for running latency tests {id="cnf-latency-tests-prerequisites_{{ context }}"}

Your cluster must meet the following requirements before you can run the latency tests:

*   You have applied all the required CNF configurations. This includes the `PerformanceProfile` cluster and other configuration according to the reference design specifications (RDS) or your specific requirements.
*   You have logged in to `registry.redhat.io` with your Customer Portal credentials by using the `podman login` command. 

**Additional resources**

*   [Scheduling a workload onto a worker with real-time capabilities](/scalability_and_performance/cnf-provisioning-low-latency-workloads#cnf-scheduling-workload-onto-worker-with-real-time-capabilities_cnf-provisioning-low-latency)

{% leveloffset +1 %}{% include "./modules/cnf-measuring-latency.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-performing-end-to-end-tests-running-the-tests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-running-hwlatdetect.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-example-results-hwlatdetect.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting firmware parameters for system tuning](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_for_real_time/9/html-single/optimizing_rhel_9_for_real_time_for_low_latency_operation/index#setting-bios-parameters-for-system-tuning_optimizing-RHEL9-for-real-time-for-low-latency-operation)

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-running-cyclictest.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-example-results-cyclictest.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-running-oslat.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-performing-end-to-end-tests-test-failure-report.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-performing-end-to-end-tests-junit-test-output.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-performing-end-to-end-tests-running-in-single-node-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-performing-end-to-end-tests-disconnected-mode.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-mirroring-images-to-custom-registry.md" %}{% endleveloffset %}

**Additional resources**

*   [registry.redhat.io](https://catalog.redhat.com/software/containers/explore)

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-image-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-performing-end-to-end-tests-mirroring-to-cluster-internal-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mirroring-different-set-of-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-performing-end-to-end-tests-troubleshooting.md" %}{% endleveloffset %}