{%- set _mod_docs_content_type = "REFERENCE" %}

# Reducing permissions after installation {id="cco-passthrough-mode-permissions-reduce_{{ context }}"}

When using passthrough mode, after installing you can reduce the installed permissions to only those permissions required to run the cluster.  {._abstract}

In passthrough mode, each component has the same permissions used by all other components. If you do not reduce the permissions after installing, all components have the broad permissions that are required to run the installation program.

After installation, reduce the permissions on your credential to only those defined by the `CredentialsRequest` CRs in the release image for the version of {{ product_title }} that you are using.

To locate the `CredentialsRequest` CRs that are required for {{ aws_short }}, {{ azure_short }}, or {{ gcp_short }} and learn how to change the permissions the CCO uses, see the _Manually creating long-term credentials_ topic for your platform.