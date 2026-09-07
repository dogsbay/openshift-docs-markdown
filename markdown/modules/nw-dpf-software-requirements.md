{%- set _mod_docs_content_type = "REFERENCE" %}
# DPF software requirements {id="nw-dpf-software-requirements_{{ context }}"}

A DPF v{{ dpf_version }} deployment requires specific versions of {{ product_title }}, the OpenShift CLI (`oc`), hosted control planes, the NVIDIA DPF Operator, and RHCOS BFB, plus `cluster-admin` privileges on the management cluster. {._abstract}

**Software version requirements**

| Component | Required version |
| --- | --- |
| {{ product_title }} | {{ product_version }} |
| OpenShift CLI (`oc`) | {{ product_version }} |
| Hosted control planes {{ product_title }} cluster | {{ product_version }} |
| NVIDIA DPF Operator | v{{ dpf_version }} |
| RHCOS BFB | {{ product_version }} |

The `RHCOS BFB` entry refers to the base RHCOS BlueField Bootstream (BFB) image, which is available from the {{ product_title }} mirror. For example:

```text
https://rhcos.mirror.openshift.com/art/storage/prod/streams/rhel-10.2/builds/10.2.20260715-0/aarch64/rhcos-10.2.20260715-0-nvidiabluefield.aarch64.bfb
```

The base BFB is layered with the NVIDIA DOCA stack at provisioning time, and the DOCA services run on the DPUs as separately deployed `DPUService` resources. The following versions are pinned by this deployment:

**NVIDIA DOCA component versions**

| Component | Required version |
| --- | --- |
| NVIDIA DOCA | 3.4.1 |
| Host-Based Networking (HBN) | 3.4.0 |
| DOCA Telemetry Service (DTS) | 1.25.5 |
| OVN-Kubernetes | Delivered by the DPF OVN-Kubernetes Helm chart |

## Required command-line tools {id="_required_command-line_tools"}

You must have the following tools installed on the workstation from which you run the deployment commands:

*   `oc` -- the {{ product_title }} CLI, version {{ product_version }}.
*   `helm` -- required to install the DPF Operator and related Helm charts.
*   `envsubst` -- substitutes environment variables into the manifest templates used throughout this documentation (the `envsubst < file.yaml | oc apply -f -` pattern). Provided by the `gettext` package.
*   `jq` -- parses JSON output during verification and troubleshooting.