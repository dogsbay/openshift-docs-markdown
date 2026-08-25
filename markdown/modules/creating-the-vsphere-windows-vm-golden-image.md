{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the vSphere Windows VM golden image {id="creating-the-vsphere-windows-vm-golden-image_{{ context }}"}

You must prepare your vSphere environment for Windows container workloads by creating the vSphere Windows VM golden image. {._abstract}

**Prerequisites**

*   You have created a private/public key pair, which is used to configure key-based authentication in the OpenSSH server. The private key must be configured in the Windows Machine Config Operator (WMCO) namespace so that the WMCO can communicate with the Windows VM.
    {% include "./snippets/wmco-key-ascii-encoding.md" %}

    See the "Configuring a secret for the Windows Machine Config Operator" section for more details.


    :::note

    You must use [Microsoft PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell) commands in several cases when creating your Windows VM. PowerShell commands in this guide are distinguished by the `PS C:\>` prefix.
    
    :::


**Procedure**

1.  Select a compatible Windows Server version. Currently, the Windows Machine Config Operator (WMCO) stable version supports the following versions: 
    *   Windows Server 2025 Long-Term Servicing Channel
    *   Windows Server 2022 Long-Term Servicing Channel with the OS-level container networking patch [KB5012637, Microsoft Windows documentation](https://support.microsoft.com/en-us/topic/april-25-2022-kb5012637-os-build-20348-681-preview-2233d69c-d4a5-4be9-8c24-04a450861a8d).
1.  Create a new VM in the vSphere client using the VM golden image with a compatible Windows Server version. For more information about compatible versions, see the "Windows Machine Config Operator prerequisites" section of the "Red Hat OpenShift support for Windows Containers release notes."

    :::important

    The virtual hardware version for your VM must meet the infrastructure requirements for {{ product_title }}. For more information, see the "VMware vSphere infrastructure requirements" section in the {{ product_title }} documentation. Also, you can refer to VMware’s documentation on [virtual machine hardware versions](https://kb.vmware.com/s/article/1003746).
    
    :::

1.  Install and configure VMware Tools version 11.0.6 or greater on the Windows VM. See the [VMware Tools documentation](https://docs.vmware.com/en/VMware-Tools/index.html) for more information.
1.  After installing VMware Tools on the Windows VM, verify the following:
    1.  The `C:\ProgramData\VMware\VMware Tools\tools.conf` file exists with the following entry:
        ```ini
        exclude-nics=
        ```

        If the `tools.conf` file does not exist, create it with the `exclude-nics` option uncommented and set as an empty value.

        This entry ensures the cloned vNIC generated on the Windows VM by the hybrid-overlay is not ignored.
    1.  The Windows VM has a valid IP address in vCenter:
        ```terminal
        C:\> ipconfig
        ```
    1.  The VMTools Windows service is running:
        ```posh
        PS C:\> Get-Service -Name VMTools | Select Status, StartType
        ```
1.  Install and configure the OpenSSH Server on the Windows VM. See Microsoft’s documentation on [installing OpenSSH](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) for more details.
1.  Set up SSH access for an administrative user. See Microsoft’s documentation on the [Administrative user](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement#administrative-user) to do this.

    :::important

    The public key used in the instructions must correspond to the private key you create later in the WMCO namespace that holds your secret. See the "Configuring a secret for the Windows Machine Config Operator" section for more details.
    
    :::

1.  You must create a new firewall rule in the Windows VM that allows incoming connections for container logs. Run the following PowerShell command to create the firewall rule on TCP port 10250:
    ```posh
    PS C:\> New-NetFirewallRule -DisplayName "ContainerLogsPort" -LocalPort 10250 -Enabled True -Direction Inbound -Protocol TCP -Action Allow -EdgeTraversalPolicy Allow
    ```
1.  Clone the Windows VM so it is a reusable image. Follow the VMware documentation on how to [clone an existing virtual machine](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-1E185A80-0B97-4B46-A32B-3EF8F309BEED.html) for more details.
1.  In the cloned Windows VM, run the [Windows Sysprep tool](+++https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep--generalize--a-windows-installation+++):
    ```terminal
    C:\> C:\Windows\System32\Sysprep\sysprep.exe /generalize /oobe /shutdown /unattend:<path_to_unattend.xml>
    ```

    Replace `<path_to_unattend.xml>` with the path to your `unattend.xml` file.

    :::note

    There is a limit on how many times you can run the `sysprep` command on a Windows image. Consult Microsoft’s [documentation](+++https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep--generalize--a-windows-installation#limits-on-how-many-times-you-can-run-sysprep+++) for more information.
    
    :::


    An example `unattend.xml` is provided, which maintains all the changes needed for the WMCO. You must modify this example; it cannot be used directly.
    ```xml title="Example unattend.xml"
    <?xml version="1.0" encoding="UTF-8"?>
    <unattend xmlns="urn:schemas-microsoft-com:unattend">
       <settings pass="specialize">
          <component xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="Microsoft-Windows-International-Core" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
             <InputLocale>0409:00000409</InputLocale>
             <SystemLocale>en-US</SystemLocale>
             <UILanguage>en-US</UILanguage>
             <UILanguageFallback>en-US</UILanguageFallback>
             <UserLocale>en-US</UserLocale>
          </component>
          <component xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="Microsoft-Windows-Security-SPP-UX" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
             <SkipAutoActivation>true</SkipAutoActivation>
          </component>
          <component xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="Microsoft-Windows-SQMApi" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
             <CEIPEnabled>0</CEIPEnabled>
          </component>
          <component xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
             <ComputerName>winhost</ComputerName>
          </component>
       </settings>
       <settings pass="oobeSystem">
          <component xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
             <AutoLogon>
                <Enabled>false</Enabled>
             </AutoLogon>
             <OOBE>
                <HideEULAPage>true</HideEULAPage>
                <HideLocalAccountScreen>true</HideLocalAccountScreen>
                <HideOEMRegistrationScreen>true</HideOEMRegistrationScreen>
                <HideOnlineAccountScreens>true</HideOnlineAccountScreens>
                <HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>
                <NetworkLocation>Work</NetworkLocation>
                <ProtectYourPC>1</ProtectYourPC>
                <SkipMachineOOBE>true</SkipMachineOOBE>
                <SkipUserOOBE>true</SkipUserOOBE>
             </OOBE>
             <RegisteredOrganization>Organization</RegisteredOrganization>
             <RegisteredOwner>Owner</RegisteredOwner>
             <DisableAutoDaylightTimeSet>false</DisableAutoDaylightTimeSet>
             <TimeZone>Eastern Standard Time</TimeZone>
             <UserAccounts>
                <AdministratorPassword>
                   <Value>MyPassword</Value>
                   <PlainText>true</PlainText>
                </AdministratorPassword>
             </UserAccounts>
          </component>
       </settings>
    </unattend>
    ```

    where:

    `<ComputerName>`
    :   Replace the `winhost` placeholder with a computer name, which must follow the Kubernetes' names specification. These specifications also apply to Guest OS customization performed on the resulting template while creating new VMs. For more information, see "Object Names and IDs specification (Kubernetes documentation)".

    `<AutoLogon>.<Enabled>`
    :   When `false`, automatic logon is disabled to avoid the security issue of leaving an open terminal with Administrator privileges at boot. This is the default value and must not be changed.

    `<UserAccounts>.<AdministratorPassword>.<Value>`
    :   Replace the `MyPassword` placeholder with the password for the Administrator account. This prevents the built-in Administrator account from having a blank password by default. Follow Microsoft’s best practices for choosing a password. For more information on Microsoft’s best practices, see "Password must meet complexity requirements (Microsoft documentation)".
    After the Sysprep tool has completed, the Windows VM will power off. You must not use or power on this VM anymore.

1.  Convert the Windows VM to a template in vCenter. For more information, see "vSphere Virtual Machine Administration (vSphere documentation)".