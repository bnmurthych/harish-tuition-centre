@echo off
title Push Harish Tuition Centre to GitHub
cd /d "C:\Users\Murthy\.gemini\antigravity\scratch\harish-tuition-centre"
echo ========================================================
echo       PUSHING HARISH TUITION CENTRE TO GITHUB
echo ========================================================
echo Repository: https://github.com/bnmurthych/harish-tuition-centre.git
echo.
"C:\Users\Murthy\AppData\Local\Programs\MinGit\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo    SUCCESSFULLY PUSHED TO GITHUB!
    echo ========================================================
) else (
    echo.
    echo If prompted to sign in, click 'Sign in with your browser'.
)
pause
