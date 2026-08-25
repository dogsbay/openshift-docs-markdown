---
title: Uninstalling the web terminal
---

# Uninstalling the web terminal {#uninstalling-web-terminal}

Uninstalling the {{ web_terminal_op }} does not remove any of the custom resource definitions (CRDs) or managed resources that are created when the Operator is installed. For security purposes, you must manually uninstall these components. By removing these components, you save cluster resources because terminals do not idle when the Operator is uninstalled.

Uninstalling the web terminal is a two-step process:

1. Uninstall the {{ web_terminal_op }} and related custom resources (CRs) that were added when you installed the Operator.
2. Uninstall the DevWorkspace Operator and its related custom resources that were added as a dependency of the {{ web_terminal_op }}.
