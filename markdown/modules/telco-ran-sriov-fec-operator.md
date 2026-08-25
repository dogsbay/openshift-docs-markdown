{%- set _mod_docs_content_type = "REFERENCE" %}

# SRIOV-FEC Operator {id="telco-ran-sriov-fec-operator_{{ context }}"}

SRIOV-FEC Operator is an optional 3rd party Certified Operator supporting FEC accelerator hardware. {._abstract}


New in this release
:   *   No reference design updates in this release

Description
:   SRIOV-FEC Operator is an optional 3rd party Certified Operator supporting FEC accelerator hardware.


Limits and requirements
:   *   Starting with FEC Operator v2.7.0:
        *   Secure boot is supported
        *   `vfio` drivers for PFs require the usage of a `vfio-token` that is injected into the pods.
        Applications in the pod can pass the VF token to DPDK by using EAL parameter `--vfio-vf-token`.

    Engineering considerations
:   *   The SRIOV-FEC Operator uses CPU cores from the isolated CPU set.
    *   You can validate FEC readiness as part of the pre-checks for application deployment, for example, by extending the validation policy.