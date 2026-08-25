{%- set _mod_docs_content_type = "REFERENCE" %}

# About Cloud Credential Operator modes {id="cco-mode-about_{{ context }}"}

You can configure the Cloud Credential Operator (CCO) to operate in several different modes. These options provide transparency and flexibility in how the CCO uses cloud credentials to process `CredentialsRequest` CRs in the cluster to suit the security requirements of your organization. {._abstract}

By setting different values for the `credentialsMode` parameter in the `install-config.yaml` file, you can configure the CCO to operate in _mint_, _passthrough_, or _manual_ mode.

*   **Mint**: In mint mode, the CCO uses the provided admin-level cloud credential to create new credentials for components in the cluster with only the specific permissions that are required.
*   **Passthrough**: In passthrough mode, the CCO passes the provided cloud credential to the components that request cloud credentials.
*   **Manual mode with long-term credentials for components**: In manual mode, you can manage long-term cloud credentials instead of the CCO.
*   **Manual mode with short-term credentials for components**: For some providers, you can use the CCO utility (`ccoctl`) during installation to implement short-term credentials for individual components. These credentials are created and managed outside the {{ product_title }} cluster.

If no mode is specified, or the `credentialsMode` parameter is set to an empty string (""), the CCO operates in its default mode.

Not all CCO modes are supported for all cloud providers, as described in the following table: 

**CCO mode support matrix**

| Cloud provider | Mint | Passthrough | Manual with long-term credentials | Manual with short-term credentials |
| :-- | :-: | :-: | :-: | :-: |
| Amazon Web Services (AWS) | X | X | X | X |
| Global Microsoft Azure |  | X | X | X |
| Microsoft Azure Stack Hub |  |  | X |  |
| {{ gcp_first }} | X | X | X | X |
| {{ ibm_cloud_name }} |  |  | X <sup>[1]</sup> |  |
| Nutanix |  |  | X <sup>[1]</sup> |  |
| {{ rh_openstack_first }} |  | X |  |  |
| VMware vSphere |  | X |  |  |

1.  This platform uses the `ccoctl` utility during installation to configure long-term credentials.