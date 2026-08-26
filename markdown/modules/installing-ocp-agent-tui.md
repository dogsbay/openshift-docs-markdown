{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying that the current installation host can pull release images {id="installing-ocp-agent-tui_{{ context }}"}

After you boot the agent image and network services are made available to the host, the agent console application performs a pull check to verify that the current host can retrieve release images. {._abstract}

If the primary pull check passes, you can quit the application to continue with the installation. If the pull check fails, the application performs additional checks, as seen in the `Additional checks` section of the TUI, to help you troubleshoot the problem. A failure for any of the additional checks is not necessarily critical as long as the primary pull check succeeds.

If there are host network configuration issues that might cause an installation to fail, you can use the console application to make adjustments to your network configurations.


:::important

If the agent console application detects host network configuration issues, the installation workflow will be halted until the user manually stops the console application and signals the intention to proceed.

:::


**Procedure**

1.  Wait for the agent console application to check whether or not the configured release image can be pulled from a registry.
1.  If the agent console application states that the installer connectivity checks have passed, wait for the prompt to time out to continue with the installation.

    :::note

    You can still choose to view or change network configuration settings even if the connectivity checks have passed.

    However, if you choose to interact with the agent console application rather than letting it time out, you must manually quit the TUI to proceed with the installation.
    
    :::

1.  If the agent console application checks have failed, which is indicated by a red icon beside the `Release image URL` pull check, use the following steps to reconfigure the host’s network settings:
    1.  Read the `Check Errors` section of the TUI.
    This section displays error messages specific to the failed checks.
        ![The home screen of the agent console application  displaying check errors](/images/agent-tui-home.png)
    1.  Select **Configure network** to launch the NetworkManager TUI.
    1.  Select **Edit a connection** and select the connection you want to reconfigure.
    1.  Edit the configuration and select **OK** to save your changes.
    1.  Select **Back** to return to the main screen of the NetworkManager TUI.
    1.  Select **Activate a Connection**.
    1.  Select the reconfigured network to deactivate it.
    1.  Select the reconfigured network again to reactivate it.
    1.  Select **Back** and then select **Quit** to return to the agent console application.
    1.  Wait at least five seconds for the continuous network checks to restart using the new network configuration.
    1.  If the `Release image URL` pull check succeeds and displays a green icon beside the URL, select **Quit** to exit the agent console application and continue with the installation.