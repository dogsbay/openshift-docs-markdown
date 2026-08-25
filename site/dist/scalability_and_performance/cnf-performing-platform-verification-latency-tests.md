---
title: Performing latency tests for platform verification
---

# Performing latency tests for platform verification {#cnf-performing-platform-verification-latency-tests}

You can use the Cloud-native Network Functions (CNF) tests image to run latency tests on a CNF-enabled OpenShift Container Platform cluster, where all the components required for running CNF workloads are installed. Run the latency tests to validate node tuning for your workload.

The `cnf-tests` container image is available at `registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }}`.

## Prerequisites for running latency tests {#cnf-latency-tests-prerequisites_cnf-latency-tests}

Your cluster must meet the following requirements before you can run the latency tests:

- You have applied all the required CNF configurations. This includes the `PerformanceProfile` cluster and other configuration according to the reference design specifications (RDS) or your specific requirements.
- You have logged in to `registry.redhat.io` with your Customer Portal credentials by using the `podman login` command.

**Additional resources**

- [Scheduling a workload onto a worker with real-time capabilities](/openshift-docs-markdown/scalability_and_performance/cnf-provisioning-low-latency-workloads#cnf-scheduling-workload-onto-worker-with-real-time-capabilities_cnf-provisioning-low-latency)

**Additional resources**

- [Setting firmware parameters for system tuning](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_for_real_time/9/html-single/optimizing_rhel_9_for_real_time_for_low_latency_operation/index#setting-bios-parameters-for-system-tuning_optimizing-RHEL9-for-real-time-for-low-latency-operation)

**Additional resources**

- [registry.redhat.io](https://catalog.redhat.com/software/containers/explore)
