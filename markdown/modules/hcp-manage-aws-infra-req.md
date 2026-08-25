{%- set _mod_docs_content_type = "CONCEPT" %}
# Infrastructure requirements for {{ aws_short }} {id="hcp-manage-aws-infra-req_{{ context }}"}

When you use {{ hcp }} on {{ aws_first }}, the infrastructure requirements vary based on your setup. {._abstract}

The infrastructure requirements fit in the following categories:

*   Prerequired and unmanaged infrastructure for the HyperShift Operator in an arbitrary {{ aws_short }} account
*   Prerequired and unmanaged infrastructure in a hosted cluster {{ aws_short }} account
*   {{ hcp_capital }}-managed infrastructure in a management {{ aws_short }} account
*   {{ hcp_capital }}-managed infrastructure in a hosted cluster {{ aws_short }} account
*   Kubernetes-managed infrastructure in a hosted cluster {{ aws_short }} account

_Prerequired_ means that {{ hcp }} requires {{ aws_short }} infrastructure to properly work. _Unmanaged_ means that no Operator or controller creates the infrastructure for you.