{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connect to the VNC console by using the web console {id="virt-connecting-vnc-console-web_{{ context }}"}

You can connect to the VNC console of a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}


:::note

If you connect to a Windows VM with a vGPU assigned as a mediated device, you can switch between the default display and the vGPU display.

:::


**Procedure**

1.  On the **Virtualization** -> **VirtualMachines** page, click a VM to open the **VirtualMachine details** page.
1.  In the navigation panel, right-click the virtual machine and select **Open Console**.
1.  Click the **Console** tab. The VNC console session starts automatically.

    :::important

    Only one connection to the VNC console is possible at a time. If you try to create a second connection to the same VNC console, a warning is displayed. You must disconnect the existing session before you create the new session.
    
    :::

1.  Optional: To switch to the vGPU display of a Windows VM, select **Ctl + Alt + 2** from the **Send key** list.
    *   Select **Ctl + Alt + 1** from the **Send key** list to restore the default display.
1.  To end the console session, click outside the console pane and then click **Disconnect**.