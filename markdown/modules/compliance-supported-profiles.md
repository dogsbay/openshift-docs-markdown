{%- set _mod_docs_content_type = "REFERENCE" %}
# Compliance profiles {id="compliance-supported-profiles_{{ context }}"}

When working with the Compliance Operator (CO), you can use the profiles provided by the Operator to meet industry standard benchmarks. {._abstract}


:::note

The following tables reflect the latest available profiles in the Compliance Operator. The only supported versions of CIS and DISA STIG profiles will be the latest. Our recommendation to customers is to use `ocp4-cis` and `ocp4-cis-node`, `ocp4-stig`, and `ocp4-stig-node`, which always point to the latest version.

:::


## CIS compliance profiles {id="cis-profiles_{{ context }}"}

**Supported CIS compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-cis <sup>[1]</sup> | CIS Red&#160;Hat {{ product_title }} Benchmark v1.9.0 | Platform | [CIS Benchmarks &#8482;](https://www.cisecurity.org/cis-benchmarks/) <sup>[4]</sup> | `x86_64`  `ppc64le`  `s390x`  `aarch64` |  |
| ocp4-cis-1-9<sup>[3]</sup> | CIS Red&#160;Hat {{ product_title }} Benchmark v1.9.0 | Platform | [CIS Benchmarks &#8482;](https://www.cisecurity.org/cis-benchmarks/) <sup>[4]</sup> | `x86_64`  `ppc64le`  `s390x`  `aarch64` |  |
| ocp4-cis-node <sup>[1]</sup> | CIS Red&#160;Hat {{ product_title }} Benchmark v1.9.0 | Node <sup>[2]</sup> | [CIS Benchmarks &#8482;](https://www.cisecurity.org/cis-benchmarks/) <sup>[4]</sup> | `x86_64`  `ppc64le`  `s390x`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-cis-node-1-9<sup>[3]</sup> | CIS Red&#160;Hat {{ product_title }} Benchmark v1.9.0 | Node <sup>[2]</sup> | [CIS Benchmarks &#8482;](https://www.cisecurity.org/cis-benchmarks/) <sup>[4]</sup> | `x86_64`  `ppc64le`  `s390x`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |

1.  The  `ocp4-cis` and `ocp4-cis-node` profiles maintain the most up-to-date version of the CIS benchmark as it becomes available in the Compliance Operator. If you want to adhere to a specific version, such as CIS v1.9.0, use the `ocp4-cis-1-9` and `ocp4-cis-node-1-9` profiles.
1.  Node profiles must be used with the relevant Platform profile. For more information, see _Compliance Operator profile types_.
1.  All earlier CIS profiles are superceded by CIS v1.9.0. It is recommended to apply the latest profile to your environment.
1.  To locate the CIS {{ product_title }} v4 Benchmark, go to  [CIS Benchmarks](https://www.cisecurity.org/benchmark/kubernetes) and click **Download Latest CIS Benchmark**, where you can then register to download the benchmark.

## BSI Profile Support {id="bsi-profiles_{{ context }}" .small}

**Supported BSI compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-bsi <sup>[1]</sup> | BSI IT-Grundschutz (Basic Protection) Building Block SYS.1.6 and APP.4.4 | Platform | [BSI Basic Protection Compendium](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf) | `x86_64` |  |
| ocp4-bsi-node <sup>[1]</sup> | BSI IT-Grundschutz (Basic Protection) Building Block SYS.1.6 and APP.4.4 | Node <sup>[2]</sup> | [BSI Basic Protection Compendium](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf) | `x86_64` |  |
| rhcos4-bsi <sup>[1]</sup> | BSI IT-Grundschutz (Basic Protection) Building Block SYS.1.6 and APP.4.4 | Node <sup>[2]</sup> | [BSI Basic Protection Compendium](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf) | `x86_64` |  |
| ocp4-bsi-2022 <sup>[3]</sup> | BSI IT-Grundschutz (Basic Protection) Building Block SYS.1.6 and APP.4.4 | Platform | [BSI Basic Protection Compendium](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf) | `x86_64` |  |
| ocp4-bsi-node-2022 <sup>[3]</sup> | BSI IT-Grundschutz (Basic Protection) Building Block SYS.1.6 and APP.4.4 | Node <sup>[2]</sup> | [BSI Basic Protection Compendium](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf) | `x86_64` |  |
| rhcos4-bsi-2022 <sup>[3]</sup> | BSI IT-Grundschutz (Basic Protection) Building Block SYS.1.6 and APP.4.4 | Node <sup>[2]</sup> | [BSI Basic Protection Compendium](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf) | `x86_64` |  |

1.  The  `ocp4-bsi`, `ocp4-bsi-node`, and `rhcos4-bsi` profiles maintain the most up-to-date version of the BSI Basic Protection Profile as it becomes available in the Compliance Operator. If you want to adhere to a specific version, such as BSI 2022, use the `ocp4-bsi-2022`, `ocp4-bsi-node-2022` or `rhcos4-bsi-2022` profiles.
1.  Node profiles must be used with the relevant Platform profile. For more information, see _Compliance Operator profile types_.
1.  Edition 2022 is the latest available English edition of the BSI IT-Grundschutz (Basic Protection) compendium. There were no changes for Building Blocks SYS.1.6 and APP.4.4, SYS.1.1, and SYS.1.3 in the latest published German compendium (edition 2023).

For more information, see [**BSI Quick Check**](https://access.redhat.com/articles/7045834). {.small}

## Essential Eight compliance profiles {id="e8-profiles_{{ context }}"}

**Supported Essential Eight compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-e8 | Australian Cyber Security Centre (ACSC) Essential Eight | Platform | [ACSC Hardening Linux Workstations and Servers](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-linux-workstations-and-servers) | `x86_64` |  |
| rhcos4-e8 | Australian Cyber Security Centre (ACSC) Essential Eight | Node | [ACSC Hardening Linux Workstations and Servers](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-linux-workstations-and-servers) | `x86_64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |

## FedRAMP High compliance profiles {id="fedramp-high-profiles_{{ context }}"}


:::important

Applying automatic remediations to any profile, such as `rhcos4-stig`, that uses the `service-sshd-disabled` rule, automatically disables the `sshd` service. This situation blocks SSH access to control plane nodes and compute nodes. To keep the SSH access enabled, create a `TailoredProfile` object and set the `rhcos4-service-sshd-disabled` rule value for the `disableRules` parameter.

:::


**Supported FedRAMP High compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-high <sup>[1]</sup> | NIST 800-53 High-Impact Baseline for Red&#160;Hat OpenShift - Platform level | Platform | [NIST SP-800-53 Release Search](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/800-53) | `x86_64` |  |
| ocp4-high-node <sup>[1]</sup> | NIST 800-53 High-Impact Baseline for Red&#160;Hat OpenShift - Node level | Node <sup>[2]</sup> | [NIST SP-800-53 Release Search](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/800-53) | `x86_64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-high-node-rev-4 | NIST 800-53 High-Impact Baseline for Red&#160;Hat OpenShift - Node level | Node <sup>[2]</sup> | [NIST SP-800-53 Release Search](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/800-53) | `x86_64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-high-rev-4 | NIST 800-53 High-Impact Baseline for Red&#160;Hat OpenShift - Platform level | Platform | [NIST SP-800-53 Release Search](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/800-53) | `x86_64` |  |
| rhcos4-high <sup>[1]</sup> | NIST 800-53 High-Impact Baseline for Red&#160;Hat Enterprise Linux CoreOS | Node | [NIST SP-800-53 Release Search](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/800-53) | `x86_64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| rhcos4-high-rev-4 | NIST 800-53 High-Impact Baseline for Red&#160;Hat Enterprise Linux CoreOS | Node | [NIST SP-800-53 Release Search](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search#!/800-53) | `x86_64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |

1.  The  `ocp4-high`, `ocp4-high-node` and `rhcos4-high` profiles maintain the most up-to-date version of the FedRAMP High standard as it becomes available in the Compliance Operator. If you want to adhere to a specific version, such as FedRAMP high R4, use the `ocp4-high-rev-4` and `ocp4-high-node-rev-4` profiles.
1.  Node profiles must be used with the relevant Platform profile. For more information, see _Compliance Operator profile types_.

## FedRAMP Moderate compliance profiles {id="fedramp-moderate-profiles_{{ context }}" .small}

**Supported FedRAMP Moderate compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-moderate <sup>[1]</sup> | NIST 800-53 Moderate-Impact Baseline for Red&#160;Hat OpenShift - Platform level | Platform | [NIST SP-800-53 Release Search](https://nvd.nist.gov/800-53/Rev4/impact/moderate) | `x86_64`  `ppc64le`  `s390x`  `aarch64` |  |
| ocp4-moderate-node <sup>[1]</sup> | NIST 800-53 Moderate-Impact Baseline for Red&#160;Hat OpenShift - Node level | Node <sup>[2]</sup> | [NIST SP-800-53 Release Search](https://nvd.nist.gov/800-53/Rev4/impact/moderate) | `x86_64`  `ppc64le`  `s390x`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-moderate-node-rev-4 | NIST 800-53 Moderate-Impact Baseline for Red&#160;Hat OpenShift - Node level | Node <sup>[2]</sup> | [NIST SP-800-53 Release Search](https://nvd.nist.gov/800-53/Rev4/impact/moderate) | `x86_64`  `ppc64le`  `s390x`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-moderate-rev-4 | NIST 800-53 Moderate-Impact Baseline for Red&#160;Hat OpenShift - Platform level | Platform | [NIST SP-800-53 Release Search](https://nvd.nist.gov/800-53/Rev4/impact/moderate) | `x86_64`  `ppc64le`  `s390x`  `aarch64` |  |
| rhcos4-moderate <sup>[1]</sup> | NIST 800-53 Moderate-Impact Baseline for Red&#160;Hat Enterprise Linux CoreOS | Node | [NIST SP-800-53 Release Search](https://nvd.nist.gov/800-53/Rev4/impact/moderate) | `x86_64`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| rhcos4-moderate-rev-4 | NIST 800-53 Moderate-Impact Baseline for Red&#160;Hat Enterprise Linux CoreOS | Node | [NIST SP-800-53 Release Search](https://nvd.nist.gov/800-53/Rev4/impact/moderate) | `x86_64`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |

1.  The  `ocp4-moderate`, `ocp4-moderate-node` and `rhcos4-moderate` profiles maintain the most up-to-date version of the FedRAMP Moderate standard as it becomes available in the Compliance Operator. If you want to adhere to a specific version, such as FedRAMP Moderate R4, use the `ocp4-moderate-rev-4` and `ocp4-moderate-node-rev-4` profiles.
1.  Node profiles must be used with the relevant Platform profile. For more information, see _Compliance Operator profile types_.

## NERC-CIP compliance profiles {id="nerc-cip-profiles_{{ context }}" .small}

**Supported NERC-CIP compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-nerc-cip | North American Electric Reliability Corporation (NERC) Critical Infrastructure Protection (CIP) cybersecurity standards profile for the {{ product_title }} - Platform level | Platform | [NERC CIP Standards](https://www.nerc.com/pa/Stand/Pages/USRelStand.aspx) | `x86_64` |  |
| ocp4-nerc-cip-node | North American Electric Reliability Corporation (NERC) Critical Infrastructure Protection (CIP) cybersecurity standards profile for the {{ product_title }} - Node level | Node <sup>[1]</sup> | [NERC CIP Standards](https://www.nerc.com/pa/Stand/Pages/USRelStand.aspx) | `x86_64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| rhcos4-nerc-cip | North American Electric Reliability Corporation (NERC) Critical Infrastructure Protection (CIP) cybersecurity standards profile for Red&#160;Hat Enterprise Linux CoreOS | Node | [NERC CIP Standards](https://www.nerc.com/pa/Stand/Pages/USRelStand.aspx) | `x86_64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |

1.  Node profiles must be used with the relevant Platform profile. For more information, see _Compliance Operator profile types_.

## PCI-DSS compliance profiles {id="pci-dss-profiles_{{ context }}" .small}

**Supported PCI-DSS compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-pci-dss <sup>[1]</sup> | PCI-DSS v4 Control Baseline for {{ product_title }} 4 | Platform | [PCI Security Standards &#174; Council Document Library](https://www.pcisecuritystandards.org/document_library?document=pci_dss) | `x86_64`  `ppc64le`  `aarch64` |  |
| ocp4-pci-dss-3-2 <sup>[3]</sup> | PCI-DSS v3.2.1 Control Baseline for {{ product_title }} 4 | Platform | [PCI Security Standards &#174; Council Document Library](https://www.pcisecuritystandards.org/document_library?document=pci_dss) | `x86_64`  `ppc64le`  `s390x`  `aarch64` |  |
| ocp4-pci-dss-4-0 | PCI-DSS v4 Control Baseline for {{ product_title }} 4 | Platform | [PCI Security Standards &#174; Council Document Library](https://www.pcisecuritystandards.org/document_library?document=pci_dss) | `x86_64`  `ppc64le`  `aarch64` |  |
| ocp4-pci-dss-node <sup>[1]</sup> | PCI-DSS v4 Control Baseline for {{ product_title }} 4 | Node <sup>[2]</sup> | [PCI Security Standards &#174; Council Document Library](https://www.pcisecuritystandards.org/document_library?document=pci_dss) | `x86_64`  `ppc64le`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-pci-dss-node-3-2 <sup>[3]</sup> | PCI-DSS v3.2.1 Control Baseline for {{ product_title }} 4 | Node <sup>[2]</sup> | [PCI Security Standards &#174; Council Document Library](https://www.pcisecuritystandards.org/document_library?document=pci_dss) | `x86_64`  `ppc64le`  `s390x`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-pci-dss-node-4-0 | PCI-DSS v4 Control Baseline for {{ product_title }} 4 | Node <sup>[2]</sup> | [PCI Security Standards &#174; Council Document Library](https://www.pcisecuritystandards.org/document_library?document=pci_dss) | `x86_64`  `ppc64le`  `aarch64` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |

1.  The  `ocp4-pci-dss` and `ocp4-pci-dss-node` profiles maintain the most up-to-date version of the PCI-DSS standard as it becomes available in the Compliance Operator. If you want to adhere to a specific version, such as PCI-DSS v3.2.1, use the `ocp4-pci-dss-3-2` and `ocp4-pci-dss-node-3-2` profiles.
1.  Node profiles must be used with the relevant Platform profile. For more information, see _Compliance Operator profile types_.
1.  PCI-DSS v3.2.1 is superceded by PCI-DSS v4. It is recommended to apply the latest profile to your environment.

## STIG compliance profiles {id="stig-profiles_{{ context }}" .small}


:::important

Applying automatic remediations to any profile, such as `rhcos4-stig`, that uses the `service-sshd-disabled` rule, automatically disables the `sshd` service. This situation blocks SSH access to control plane nodes and compute nodes. To keep the SSH access enabled, create a `TailoredProfile` object and set the `rhcos4-service-sshd-disabled` rule value for the `disableRules` parameter.

:::


**Supported STIG compliance profiles**

| Profile | Profile title | Application | Industry compliance benchmark | Supported architectures | Supported platforms |
| --- | --- | --- | --- | --- | --- |
| ocp4-stig <sup>[1]</sup> | Defense Information Systems Agency Security Technical Implementation Guide (DISA STIG) for Red&#160;Hat OpenShift<sup>[3]</sup> | Platform | [DISA-STIG](https://public.cyber.mil/stigs/downloads/) | `x86_64`  `ppc64le` |  |
| ocp4-stig-node <sup>[1]</sup> | Defense Information Systems Agency Security Technical Implementation Guide (DISA STIG) for Red&#160;Hat OpenShift<sup>[3]</sup> | Node <sup>[2]</sup> | [DISA-STIG](https://public.cyber.mil/stigs/downloads/) | `x86_64`  `ppc64le` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| ocp4-stig-v2r3 | Defense Information Systems Agency Security Technical Implementation Guide (DISA STIG) for Red&#160;Hat OpenShift V2R3 | Platform | [DISA-STIG](https://public.cyber.mil/stigs/downloads/) | `x86_64`  `ppc64le` |  |
| ocp4-stig-node-v2r3 <sup>[1]</sup> | Defense Information Systems Agency Security Technical Implementation Guide (DISA STIG) for Red&#160;Hat OpenShift V2R3 | Node | [DISA-STIG](https://public.cyber.mil/stigs/downloads/) | `x86_64`  `ppc64le` |  |
| rhcos4-stig<sup>[1]</sup> | Defense Information Systems Agency Security Technical Implementation Guide (DISA STIG) for Red&#160;Hat OpenShift<sup>[3]</sup> | Node | [DISA-STIG](https://public.cyber.mil/stigs/downloads/) | `x86_64`  `ppc64le` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |
| rhcos4-stig-v2r3 | Defense Information Systems Agency Security Technical Implementation Guide (DISA STIG) for Red&#160;Hat OpenShift V2R3 | Node | [DISA-STIG](https://public.cyber.mil/stigs/downloads/) | `x86_64`  `ppc64le` | {{ product_rosa }} with {{ hcp }} (ROSA HCP) |

1.  The  `ocp4-stig`, `ocp4-stig-node` and `rhcos4-stig` profiles maintain the most up-to-date version of the DISA-STIG benchmark as it becomes available in the Compliance Operator. If you want to adhere to a specific version, such as DISA-STIG V2R3, use the `ocp4-stig-v2r3` and `ocp4-stig-node-v2r3` profiles.
1.  Node profiles must be used with the relevant Platform profile. For more information, see _Compliance Operator profile types_.
1.  DISA-STIG V1R2 is superceded by DISA-STIG V2R3. It is recommended to apply the latest profile to your environment.

## About extended compliance profiles {id="compliance-extended-profiles_{{ context }}" .small}

Some compliance profiles have controls that require following industry best practices, resulting in some profiles extending others. Combining the Center for Internet Security (CIS) best practices with National Institute of Standards and Technology (NIST) security frameworks establishes a path to a secure and compliant environment.

For example, the NIST High-Impact and Moderate-Impact profiles extend the CIS profile to achieve compliance. As a result, extended compliance profiles eliminate the need to run both profiles in a single cluster.

**Profile extensions**

| Profile | Extends |
| --- | --- |
| ocp4-pci-dss | ocp4-cis |
| ocp4-pci-dss-node | ocp4-cis-node |
| ocp4-high | ocp4-cis |
| ocp4-high-node | ocp4-cis-node |
| ocp4-moderate | ocp4-cis |
| ocp4-moderate-node | ocp4-cis-node |
| ocp4-nerc-cip | ocp4-moderate |
| ocp4-nerc-cip-node | ocp4-moderate-node |